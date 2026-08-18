package com.alanmulhall.portfolio.ui.viewer

import android.content.Context
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTouchInput
import androidx.compose.ui.test.click
import androidx.compose.ui.unit.IntSize
import androidx.test.core.app.ApplicationProvider
import coil3.ImageLoader
import coil3.SingletonImageLoader
import coil3.test.FakeImageLoaderEngine
import com.alanmulhall.portfolio.data.WorkImage
import com.alanmulhall.portfolio.ui.theme.PortfolioTheme
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
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
class ViewerScreenTest {

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

    private fun setContent(img: WorkImage = image, onDismiss: () -> Unit) {
        composeTestRule.setContent {
            PortfolioTheme {
                ViewerScreen(image = img, onDismiss = onDismiss)
            }
        }
    }

    @Test
    fun rendersTheArtwork() {
        setContent(onDismiss = {})

        composeTestRule.onNodeWithContentDescription("West Cork").assertIsDisplayed()
    }

    @Test
    fun tappingTheImageDismisses() {
        var dismissed = false
        setContent(onDismiss = { dismissed = true })

        composeTestRule.onNodeWithContentDescription("West Cork").performTouchInput { click(center) }

        assertTrue(dismissed)
    }

    @Test
    fun closeButtonDismisses() {
        var dismissed = false
        setContent(onDismiss = { dismissed = true })

        composeTestRule.onNodeWithText("\u2715").performClick()

        assertTrue(dismissed)
    }

    @Test
    fun blankTitleUsesArtworkFallbackContentDescription() {
        val blankTitleImage = image.copy(title = "")
        setContent(img = blankTitleImage, onDismiss = {})

        composeTestRule.onNodeWithContentDescription("Artwork").assertIsDisplayed()
    }

    // clampOffset unit tests — no Compose rule needed, pure arithmetic.

    @Test
    fun clampOffset_atScaleOne_returnsZeroOffset() {
        val result = clampOffset(Offset(100f, 100f), scale = 1f, viewport = IntSize(800, 1200))
        assertEquals(Offset.Zero, result)
    }

    @Test
    fun clampOffset_withinBounds_passesThrough() {
        // scale=2 → maxX = (2-1)*800/2 = 400, maxY = (2-1)*1200/2 = 600
        val result = clampOffset(Offset(200f, 300f), scale = 2f, viewport = IntSize(800, 1200))
        assertEquals(Offset(200f, 300f), result)
    }

    @Test
    fun clampOffset_exceedsMaxX_clampsToMax() {
        // scale=2 → maxX=400; supply x=600 → should clamp to 400
        val result = clampOffset(Offset(600f, 0f), scale = 2f, viewport = IntSize(800, 1200))
        assertEquals(400f, result.x, 0.001f)
        assertEquals(0f, result.y, 0.001f)
    }

    @Test
    fun clampOffset_exceedsNegativeMaxX_clampsToNegativeMax() {
        // scale=2 → maxX=400; supply x=-600 → should clamp to -400
        val result = clampOffset(Offset(-600f, 0f), scale = 2f, viewport = IntSize(800, 1200))
        assertEquals(-400f, result.x, 0.001f)
    }

    @Test
    fun clampOffset_exceedsMaxY_clampsToMax() {
        // scale=3 → maxY = (3-1)*1200/2 = 1200; supply y=1500 → should clamp to 1200
        val result = clampOffset(Offset(0f, 1500f), scale = 3f, viewport = IntSize(800, 1200))
        assertEquals(1200f, result.y, 0.001f)
    }
}
