package com.alanmulhall.portfolio.ui.gallery

import com.alanmulhall.portfolio.data.ImagesRepository
import com.alanmulhall.portfolio.data.WorkImage
import java.io.IOException
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test

class GalleryViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    private fun work(id: Int) = WorkImage(
        id = id,
        title = "Work $id",
        medium = "Oil on canvas",
        year = 2024,
        position = id,
        url = "https://c.example/$id.jpg",
    )

    private class FakeImagesRepository(
        private val block: suspend () -> List<WorkImage>,
    ) : ImagesRepository {
        override suspend fun getImages(): List<WorkImage> = block()
    }

    @Test
    fun `loads images into success state`() {
        val images = listOf(work(1), work(2))
        val viewModel = GalleryViewModel(FakeImagesRepository { images })

        val state = viewModel.uiState.value

        assertTrue(state is GalleryUiState.Success)
        assertEquals(images, (state as GalleryUiState.Success).images)
    }

    @Test
    fun `empty result becomes empty state`() {
        val viewModel = GalleryViewModel(FakeImagesRepository { emptyList() })

        assertEquals(GalleryUiState.Empty, viewModel.uiState.value)
    }

    @Test
    fun `failure becomes error state`() {
        val viewModel = GalleryViewModel(FakeImagesRepository { throw IOException("boom") })

        val state = viewModel.uiState.value

        assertTrue(state is GalleryUiState.Error)
    }

    @Test
    fun `retry recovers from error`() {
        var failing = true
        val viewModel = GalleryViewModel(
            FakeImagesRepository {
                if (failing) throw IOException("boom") else listOf(work(1))
            },
        )
        assertTrue(viewModel.uiState.value is GalleryUiState.Error)

        failing = false
        viewModel.refresh()

        assertTrue(viewModel.uiState.value is GalleryUiState.Success)
    }

    @Test
    fun `viewer selection flows through the viewmodel`() {
        val images = listOf(work(1))
        val viewModel = GalleryViewModel(FakeImagesRepository { images })

        assertEquals(null, viewModel.viewerImage.value)

        viewModel.openViewer(images[0])
        assertEquals(images[0], viewModel.viewerImage.value)

        viewModel.dismissViewer()
        assertEquals(null, viewModel.viewerImage.value)
    }
}
