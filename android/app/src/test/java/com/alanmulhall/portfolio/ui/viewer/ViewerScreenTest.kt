package com.alanmulhall.portfolio.ui.viewer

import android.content.Context
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTouchInput
import androidx.compose.ui.test.click
import androidx.test.core.app.ApplicationProvider
import coil3.ImageLoader
import coil3.SingletonImageLoader
import coil3.test.FakeImageLoaderEngine
import com.alanmulhall.portfolio.data.WorkImage
import com.alanmulhall.portfolio.ui.theme.PortfolioTheme
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

    private fun setContent(onDismiss: () -> Unit) {
        composeTestRule.setContent {
            PortfolioTheme {
                ViewerScreen(image = image, onDismiss = onDismiss)
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
}
