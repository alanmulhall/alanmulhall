package com.alanmulhall.portfolio.data

import kotlinx.serialization.Serializable

/**
 * Wire shape of `GET /api/images` (see `admin/app/controllers/api/images_controller.rb`).
 * `title`, `medium` and `year` may be absent in the payload.
 */
@Serializable
data class WorkImageDto(
    val id: Int,
    val title: String? = null,
    val medium: String? = null,
    val year: Int? = null,
    val position: Int = 0,
    val url: String,
)

fun WorkImageDto.toWorkImage() = WorkImage(
    id = id,
    title = title.orEmpty(),
    medium = medium.orEmpty(),
    year = year,
    position = position,
    url = url,
)
