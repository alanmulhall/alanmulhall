package com.alanmulhall.portfolio.ui.gallery

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.alanmulhall.portfolio.data.ImagesRepository
import com.alanmulhall.portfolio.data.WorkImage
import java.io.IOException
import kotlin.coroutines.cancellation.CancellationException
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

sealed interface GalleryUiState {
    data object Loading : GalleryUiState
    data class Success(val images: List<WorkImage>) : GalleryUiState
    data object Empty : GalleryUiState
    data class Error(val message: String) : GalleryUiState
}

class GalleryViewModel(private val repository: ImagesRepository) : ViewModel() {

    private val _uiState = MutableStateFlow<GalleryUiState>(GalleryUiState.Loading)
    val uiState: StateFlow<GalleryUiState> = _uiState.asStateFlow()

    private val _viewerImage = MutableStateFlow<WorkImage?>(null)
    val viewerImage: StateFlow<WorkImage?> = _viewerImage.asStateFlow()

    init {
        refresh()
    }

    fun refresh() {
        viewModelScope.launch {
            _uiState.value = GalleryUiState.Loading
            try {
                val images = repository.getImages()
                _uiState.value = if (images.isEmpty()) GalleryUiState.Empty else GalleryUiState.Success(images)
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                Log.w(TAG, "Failed to load images", e)
                _uiState.value = GalleryUiState.Error("Couldn't load works.")
            }
        }
    }

    fun openViewer(image: WorkImage) {
        _viewerImage.value = image
    }

    fun dismissViewer() {
        _viewerImage.value = null
    }

    companion object {
        private const val TAG = "GalleryViewModel"

        fun factory(repository: ImagesRepository): ViewModelProvider.Factory = viewModelFactory {
            initializer { GalleryViewModel(repository) }
        }
    }
}
