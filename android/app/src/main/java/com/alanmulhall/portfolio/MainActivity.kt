package com.alanmulhall.portfolio

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.alanmulhall.portfolio.data.OkHttpImagesRepository
import com.alanmulhall.portfolio.ui.gallery.GalleryScreen
import com.alanmulhall.portfolio.ui.gallery.GalleryViewModel
import com.alanmulhall.portfolio.ui.theme.PortfolioTheme
import com.alanmulhall.portfolio.ui.viewer.ViewerScreen

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PortfolioTheme {
                val repository = remember { OkHttpImagesRepository(BuildConfig.API_BASE_URL) }
                val viewModel: GalleryViewModel = viewModel(factory = GalleryViewModel.factory(repository))
                val state by viewModel.uiState.collectAsStateWithLifecycle()
                val viewerImage by viewModel.viewerImage.collectAsState()

                val context = LocalContext.current
                val onContact: () -> Unit = {
                    val intent = Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:alanmulhall@gmail.com"))
                    try {
                        context.startActivity(intent)
                    } catch (e: Exception) {
                        Log.w("MainActivity", "No email app available", e)
                    }
                }

                viewerImage?.let { image ->
                    ViewerScreen(image = image, onDismiss = viewModel::dismissViewer)
                }

                GalleryScreen(
                    state = state,
                    onRetry = viewModel::refresh,
                    onContact = onContact,
                    onImageClick = viewModel::openViewer,
                )
            }
        }
    }
}
