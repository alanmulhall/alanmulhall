package com.alanmulhall.portfolio.ui.gallery

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowLeft
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp

import coil3.compose.AsyncImage
import com.alanmulhall.portfolio.data.WorkImage
import com.alanmulhall.portfolio.ui.theme.Ink
import com.alanmulhall.portfolio.ui.theme.Muted
import com.alanmulhall.portfolio.ui.theme.Paper
import kotlinx.coroutines.launch

private const val TABLET_BREAKPOINT_DP = 840

@Composable
fun GalleryScreen(
    state: GalleryUiState,
    onRetry: () -> Unit,
    onContact: () -> Unit,
    onImageClick: (WorkImage) -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Paper),
    ) {
        Header(onContact = onContact)

        BoxWithConstraints(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth(),
        ) {
            val isTablet = maxWidth >= TABLET_BREAKPOINT_DP.dp
            when (state) {
                GalleryUiState.Loading -> CenteredView { LoadingIndicator() }
                GalleryUiState.Empty -> CenteredView {
                    Message(text = "No works to show.", actionLabel = "retry", onAction = onRetry)
                }
                is GalleryUiState.Error -> CenteredView {
                    Message(text = state.message, actionLabel = "retry", onAction = onRetry)
                }
                is GalleryUiState.Success -> Slider(
                    images = state.images,
                    isTablet = isTablet,
                    onImageClick = onImageClick,
                )
            }
        }

        Footer()
    }
}

@Composable
private fun Header(onContact: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp),
    ) {
        Text(
            text = "Alan Mulhall",
            style = MaterialTheme.typography.titleLarge,
            color = Ink,
        )
        Text(
            text = "contact",
            style = MaterialTheme.typography.bodyMedium,
            color = Muted,
            textDecoration = TextDecoration.Underline,
            modifier = Modifier.clickable(onClick = onContact),
        )
    }
}

@Composable
private fun Footer() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 16.dp),
    ) {
        Text(
            text = "Alan Mulhall | \u00A9 ${java.time.Year.now().value}",
            style = MaterialTheme.typography.labelSmall,
            color = Muted,
        )
    }
}

@Composable
private fun Slider(
    images: List<WorkImage>,
    isTablet: Boolean,
    onImageClick: (WorkImage) -> Unit,
) {
    val pagerState = rememberPagerState(pageCount = { images.size })
    val scope = rememberCoroutineScope()

    Column(modifier = Modifier.fillMaxSize()) {
        Box(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth(),
        ) {
            HorizontalPager(state = pagerState, modifier = Modifier.fillMaxSize()) { page ->
                Slide(image = images[page], onImageClick = onImageClick)
            }

            if (isTablet) {
                ArrowButton(
                    onClick = {
                        if (pagerState.currentPage > 0) {
                            scope.launch { pagerState.animateScrollToPage(pagerState.currentPage - 1) }
                        }
                    },
                    contentDescription = "Previous",
                    icon = Icons.AutoMirrored.Filled.KeyboardArrowLeft,
                    modifier = Modifier
                        .align(Alignment.CenterStart)
                        .padding(start = 24.dp),
                )
                ArrowButton(
                    onClick = {
                        if (pagerState.currentPage < images.lastIndex) {
                            scope.launch { pagerState.animateScrollToPage(pagerState.currentPage + 1) }
                        }
                    },
                    contentDescription = "Next",
                    icon = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                    modifier = Modifier
                        .align(Alignment.CenterEnd)
                        .padding(end = 24.dp),
                )
            }
        }

        if (!isTablet) {
            PositionCounter(
                position = pagerState.currentPage + 1,
                total = images.size,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 12.dp),
            )
        }
    }
}

@Composable
private fun Slide(image: WorkImage, onImageClick: (WorkImage) -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 24.dp, vertical = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {
        Box(
            modifier = Modifier
                .weight(1f, fill = false)
                .fillMaxWidth(),
            contentAlignment = Alignment.Center,
        ) {
            AsyncImage(
                model = image.url,
                contentDescription = image.title.ifBlank { null },
                modifier = Modifier
                    .fillMaxSize()
                    .clickable { onImageClick(image) },
            )
        }
        if (image.title.isNotBlank() || image.year != null) {
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = captionFor(image),
                style = MaterialTheme.typography.labelSmall,
                color = Muted,
            )
        }
    }
}

@Composable
private fun PositionCounter(position: Int, total: Int, modifier: Modifier = Modifier) {
    Text(
        text = "${position.toString().padStart(total.toString().length, '0')} / $total",
        style = MaterialTheme.typography.labelSmall,
        color = Muted,
        modifier = modifier,
        textAlign = TextAlign.Center,
    )
}

@Composable
private fun ArrowButton(
    onClick: () -> Unit,
    contentDescription: String,
    icon: ImageVector,
    modifier: Modifier = Modifier,
) {
    IconButton(onClick = onClick, modifier = modifier.size(48.dp)) {
        Icon(imageVector = icon, contentDescription = contentDescription, tint = Ink)
    }
}

@Composable
private fun CenteredView(content: @Composable () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        contentAlignment = Alignment.Center,
    ) {
        content()
    }
}

@Composable
private fun LoadingIndicator() {
    CircularProgressIndicator(
        modifier = Modifier.size(24.dp),
        color = Muted,
        strokeWidth = 2.dp,
    )
}

@Composable
private fun Message(text: String, actionLabel: String, onAction: () -> Unit) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(
            text = text,
            style = MaterialTheme.typography.labelSmall,
            color = Muted,
        )
        Text(
            text = actionLabel,
            style = MaterialTheme.typography.labelSmall.copy(fontWeight = FontWeight.Medium),
            color = Ink,
            textDecoration = TextDecoration.Underline,
            modifier = Modifier
                .padding(top = 8.dp)
                .clickable(onClick = onAction),
        )
    }
}

private fun captionFor(image: WorkImage): String = buildString {
    append(image.title)
    if (image.year != null) {
        if (isNotEmpty()) append(", ")
        append(image.year)
    }
}
