package com.alanmulhall.portfolio.ui.viewer

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.alanmulhall.portfolio.data.WorkImage

private const val MAX_ZOOM = 5f

/**
 * Full-screen lightbox mirroring the web's `<dialog>` overlay: near-black
 * background, image contained, tap outside or back dismisses. Adds pinch-zoom
 * and pan on top of web parity, clamped so the image can't be zoomed out past
 * fit or dragged off-screen.
 */
@Composable
fun ViewerScreen(image: WorkImage, onDismiss: () -> Unit) {
    BackHandler(onBack = onDismiss)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xE6000000))
            .pointerInput(Unit) {
                detectTapGestures(onTap = { onDismiss() })
            },
    ) {
        ZoomableImage(image = image)

        Text(
            text = "\u2715",
            fontSize = 20.sp,
            color = Color.White,
            modifier = Modifier
                .align(Alignment.TopEnd)
                .statusBarsPadding()
                .padding(20.dp)
                .size(40.dp)
                .clickable(onClick = onDismiss),
        )
    }
}

@Composable
private fun ZoomableImage(image: WorkImage) {
    var scale by remember { mutableFloatStateOf(1f) }
    var offset by remember { mutableStateOf(Offset.Zero) }
    var viewport by remember { mutableStateOf(IntSize.Zero) }

    AsyncImage(
        model = image.url,
        contentDescription = image.title.ifBlank { "Artwork" },
        modifier = Modifier
            .fillMaxSize()
            .onSizeChanged { viewport = it }
            .pointerInput(Unit) {
                detectTransformGestures { _, pan, zoom, _ ->
                    scale = (scale * zoom).coerceIn(1f, MAX_ZOOM)
                    offset = clampOffset(offset + pan, scale, viewport)
                }
            }
            .graphicsLayer {
                scaleX = scale
                scaleY = scale
                translationX = offset.x
                translationY = offset.y
            },
    )
}

internal fun clampOffset(offset: Offset, scale: Float, viewport: IntSize): Offset {
    val maxX = ((scale - 1f) * viewport.width / 2f).coerceAtLeast(0f)
    val maxY = ((scale - 1f) * viewport.height / 2f).coerceAtLeast(0f)
    return Offset(
        x = offset.x.coerceIn(-maxX, maxX),
        y = offset.y.coerceIn(-maxY, maxY),
    )
}
