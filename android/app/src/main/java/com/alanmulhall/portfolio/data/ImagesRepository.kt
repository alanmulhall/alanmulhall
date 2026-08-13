package com.alanmulhall.portfolio.data

/**
 * Single source of artwork data. The implementation (OkHttp today, Retrofit if
 * the API ever grows) is hidden so ViewModels depend only on this contract.
 */
interface ImagesRepository {
    /** Fetches visible artworks, ordered. Throws on network/HTTP failure. */
    suspend fun getImages(): List<WorkImage>
}
