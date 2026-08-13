package com.alanmulhall.portfolio.ui.gallery

import android.content.Context
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.click
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.onRoot
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTouchInput
import androidx.test.core.app.ApplicationProvider
import coil3.ImageLoader
import coil3.SingletonImageLoader
import coil3.test.FakeImageLoaderEngine
import com.alanmulhall.portfolio.data.WorkImage
import com.alanmulhall.portfolio.ui.theme.PortfolioTheme
import com.alanmulhall.portfolio.ui.viewer.ViewerScreen
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config
import org.robolectric.annotation.GraphicsMode

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [35])
@GraphicsMode(GraphicsMode.Mode.NATIVE)
class GalleryViewerOverlayTest {

    @get:Rule
    val composeTestRule = createComposeRule()

    private val image = WorkImage(
        id = 1,
        title = "West Cork",
        medium = "Oil on canvas",
        year = 2024,
        position = 1,
        url = "https://c.example/1.jpg",
    )

    @Before
    fun setUp() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        SingletonImageLoader.setUnsafe(
            ImageLoader.Builder(context)
                .components { add(FakeImageLoaderEngine.Builder().build()) }
                .build(),
        )
    }

    /**
     * Mirrors MainActivity's overlay structure: the gallery is emitted first and the
     * viewer last, so the viewer draws on top. Emitting the viewer before the gallery
     * would hide it behind the gallery's opaque Paper background.
     */
    private fun setOverlayContent() {
        composeTestRule.setContent {
            PortfolioTheme {
                var viewer by remember { mutableStateOf<WorkImage?>(null) }
                Box(modifier = Modifier.fillMaxSize()) {
                    GalleryScreen(
                        state = GalleryUiState.Success(listOf(image)),
                        onRetry = {},
                        onContact = {},
                        onImageClick = { viewer = it },
                    )

                    viewer?.let { ViewerScreen(image = it, onDismiss = { viewer = null }) }
                }
            }
        }
    }

    @Test
    fun tappingGalleryImageOpensViewerOnTop() {
        setOverlayContent()

        composeTestRule.onNodeWithContentDescription("West Cork").performClick()

        composeTestRule.onNodeWithText("\u2715").assertIsDisplayed()
    }

    @Test
    fun viewerSitsAboveTheGalleryAndReceivesTaps() {
        setOverlayContent()

        composeTestRule.onNodeWithContentDescription("West Cork").performClick()
        composeTestRule.onNodeWithText("\u2715").assertIsDisplayed()

        composeTestRule.onRoot().performTouchInput { click(center) }

        composeTestRule.onNodeWithText("\u2715").assertDoesNotExist()
    }
}
