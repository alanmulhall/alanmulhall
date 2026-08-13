package com.alanmulhall.portfolio.data

import java.io.IOException
import java.util.concurrent.TimeUnit
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.OkHttpClient
import okhttp3.Request

/**
 * OkHttp-backed [ImagesRepository] hitting `GET {baseUrl}/api/images`.
 * Requests run on [Dispatchers.IO]; non-2xx responses and parse failures
 * surface as [IOException] for the caller to degrade gracefully.
 */
class OkHttpImagesRepository(
    private val baseUrl: String,
    private val client: OkHttpClient = defaultClient(),
) : ImagesRepository {

    override suspend fun getImages(): List<WorkImage> = withContext(Dispatchers.IO) {
        val request = Request.Builder()
            .url("${baseUrl.trimEnd('/')}/api/images")
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                throw IOException("Images API returned HTTP ${response.code}")
            }
            val body = response.body?.string() ?: throw IOException("Images API returned an empty body")
            ApiJson.decodeFromString<List<WorkImageDto>>(body)
                .filter { it.url.isNotBlank() }
                .map { it.toWorkImage() }
        }
    }

    private companion object {
        // The gallery blocks first paint, so bound the whole call — mirrors the
        // web loader's AbortSignal.timeout(5000).
        fun defaultClient() = OkHttpClient.Builder()
            .callTimeout(10, TimeUnit.SECONDS)
            .build()
    }
}
