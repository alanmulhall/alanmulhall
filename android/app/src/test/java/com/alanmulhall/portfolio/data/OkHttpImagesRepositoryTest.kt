package com.alanmulhall.portfolio.data

import java.io.IOException
import kotlinx.coroutines.test.runTest
import mockwebserver3.MockResponse
import mockwebserver3.MockWebServer
import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

class OkHttpImagesRepositoryTest {

    private lateinit var server: MockWebServer

    @Before
    fun setUp() {
        server = MockWebServer()
        server.start()
    }

    @After
    fun tearDown() {
        server.close()
    }

    private fun jsonResponse(body: String) = MockResponse.Builder().body(body).build()

    private fun repository() = OkHttpImagesRepository(baseUrl = server.url("/").toString())

    @Test
    fun `returns mapped images`() = runTest {
        server.enqueue(
            jsonResponse(
                """[{"id":1,"title":null,"medium":"Oil on canvas","year":null,"position":1,"url":"https://c.example/1.jpg"}]""",
            ),
        )

        val images = repository().getImages()

        assertEquals(1, images.size)
        assertEquals("", images[0].title)
        assertEquals("Oil on canvas", images[0].medium)
    }

    @Test
    fun `filters images with blank urls`() = runTest {
        server.enqueue(
            jsonResponse(
                """[{"id":1,"title":"A","medium":"M","year":2020,"position":1,"url":""},{"id":2,"title":"B","medium":"M","year":2020,"position":2,"url":"https://c.example/2.jpg"}]""",
            ),
        )

        val images = repository().getImages()

        assertEquals(1, images.size)
        assertEquals("B", images[0].title)
    }

    @Test
    fun `throws on non-2xx response`() = runTest {
        server.enqueue(MockResponse.Builder().code(500).build())

        val error = runCatching { repository().getImages() }.exceptionOrNull()

        assertTrue(error is IOException)
    }

    @Test
    fun `throws on malformed body`() = runTest {
        server.enqueue(jsonResponse("not json"))

        val error = runCatching { repository().getImages() }.exceptionOrNull()

        assertTrue(error is IOException || error is kotlinx.serialization.SerializationException)
    }

    @Test
    fun `strips trailing slash from base url`() = runTest {
        server.enqueue(jsonResponse("[]"))
        val repo = OkHttpImagesRepository(baseUrl = "${server.url("/")}")

        val images = repo.getImages()

        assertEquals(0, images.size)
        assertEquals("/api/images", server.takeRequest().url.encodedPath)
    }
}
