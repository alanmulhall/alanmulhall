package com.alanmulhall.portfolio.ui.gallery

import android.content.Context
import androidx.compose.ui.test.assertCountEquals
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.assertIsNotDisplayed
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onAllNodesWithTag
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
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
class GalleryScreenTest {

    @get:Rule
    val composeTestRule = createComposeRule()

    @Before
    fun setUp() {
        // Deterministic image loading: any URL resolves to a placeholder bitmap.
        val context = ApplicationProvider.getApplicationContext<Context>()
        SingletonImageLoader.setUnsafe(
            ImageLoader.Builder(context)
                .components { add(FakeImageLoaderEngine.Builder().build()) }
                .build(),
        )
    }

    private fun work(id: Int, title: String = "Work $id", year: Int? = null) = WorkImage(
        id = id,
        title = title,
        medium = "Oil on canvas",
        year = year,
        position = id,
        url = "https://c.example/$id.jpg",
    )

    private fun setContent(
        state: GalleryUiState,
        onRetry: () -> Unit = {},
        onContact: () -> Unit = {},
        onImageClick: (WorkImage) -> Unit = {},
    ) {
        composeTestRule.setContent {
            PortfolioTheme {
                GalleryScreen(
                    state = state,
                    onRetry = onRetry,
                    onContact = onContact,
                    onImageClick = onImageClick,
                )
            }
        }
    }

    @Test
    fun rendersHeaderAndFooter() {
        setContent(state = GalleryUiState.Loading)

        composeTestRule.onNodeWithText("Alan Mulhall").assertIsDisplayed()
        composeTestRule.onNodeWithText("contact").assertIsDisplayed()
    }

    @Test
    fun showsEmptyStateWithRetry() {
        setContent(state = GalleryUiState.Empty)

        composeTestRule.onNodeWithText("No works to show.").assertIsDisplayed()
        composeTestRule.onNodeWithText("retry").assertIsDisplayed()
    }

    @Test
    fun clickingRetryInvokesCallback() {
        var retried = false
        setContent(state = GalleryUiState.Error("Couldn't load works."), onRetry = { retried = true })

        composeTestRule.onNodeWithText("retry").performClick()

        assertTrue(retried)
    }

    @Test
    fun rendersFirstSlideCaptionAndCounter() {
        setContent(
            state = GalleryUiState.Success(
                listOf(work(1, title = "West Cork", year = 2024), work(2, title = "Harbour")),
            ),
        )

        composeTestRule.onNodeWithText("West Cork, 2024").assertIsDisplayed()
        composeTestRule.onNodeWithText("1 / 2").assertIsDisplayed()
    }

    @Test
    fun tappingAnImageOpensTheViewer() {
        var clicked: WorkImage? = null
        val image = work(1, title = "West Cork")
        setContent(state = GalleryUiState.Success(listOf(image)), onImageClick = { clicked = it })

        composeTestRule.onNodeWithContentDescription("West Cork").performClick()

        assertTrue(clicked == image)
    }

    @Test
    fun loadingStateShowsSpinner() {
        setContent(state = GalleryUiState.Loading)

        composeTestRule.onNodeWithTag("loading_indicator").assertIsDisplayed()
    }

    @Test
    fun errorStateShowsMessageAndRetryButton() {
        setContent(state = GalleryUiState.Error("Couldn't load works."))

        composeTestRule.onNodeWithText("Couldn't load works.").assertIsDisplayed()
        composeTestRule.onNodeWithText("retry").assertIsDisplayed()
    }

    @Test
    fun noCaptionWhenTitleIsBlankAndYearIsNull() {
        val noMetaImage = work(1, title = "", year = null)
        setContent(state = GalleryUiState.Success(listOf(noMetaImage)))

        // The caption composable must not be present when title is blank and year is null.
        composeTestRule.onAllNodesWithTag("slide_caption").assertCountEquals(0)
        // Counter is still present (1 image total).
        composeTestRule.onNodeWithText("1 / 1").assertIsDisplayed()
    }

    @Test
    @Config(sdk = [35], qualifiers = "w840dp")
    fun tabletLayoutShowsArrowsAndHidesCounter() {
        setContent(
            state = GalleryUiState.Success(
                listOf(work(1, title = "West Cork"), work(2, title = "Harbour")),
            ),
        )

        composeTestRule.onNodeWithContentDescription("Previous").assertIsDisplayed()
        composeTestRule.onNodeWithContentDescription("Next").assertIsDisplayed()
        // Position counter must not be rendered on tablet.
        composeTestRule.onNodeWithText("1 / 2").assertIsNotDisplayed()
    }
}
