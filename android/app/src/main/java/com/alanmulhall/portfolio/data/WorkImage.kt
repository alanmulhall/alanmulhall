package com.alanmulhall.portfolio.data

/**
 * Normalized artwork as consumed by the UI. Mirrors the API payload shape with
 * nullable fields normalized at the fetch site (title/medium null -> empty
 * string), the same convention `web/app/types.ts` documents for the web app.
 */
data class WorkImage(
    val id: Int,
    val title: String,
    val medium: String,
    val year: Int?,
    val position: Int,
    val url: String,
)
