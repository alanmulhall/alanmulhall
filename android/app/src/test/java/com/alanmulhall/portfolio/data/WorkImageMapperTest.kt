package com.alanmulhall.portfolio.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class WorkImageMapperTest {

    @Test
    fun `nullable fields normalize to empty strings`() {
        val dto = WorkImageDto(id = 7, title = null, medium = null, year = null, position = 3, url = "https://c.example/7.jpg")

        val image = dto.toWorkImage()

        assertEquals(7, image.id)
        assertEquals("", image.title)
        assertEquals("", image.medium)
        assertNull(image.year)
        assertEquals(3, image.position)
        assertEquals("https://c.example/7.jpg", image.url)
    }

    @Test
    fun `provided values are kept`() {
        val dto = WorkImageDto(id = 1, title = "West Cork", medium = "Oil on canvas", year = 2024, position = 1, url = "https://c.example/1.jpg")

        val image = dto.toWorkImage()

        assertEquals("West Cork", image.title)
        assertEquals("Oil on canvas", image.medium)
        assertEquals(2024, image.year)
    }

    @Test
    fun `parses the full api payload shape`() {
        val payload = """
            [
              {"id":1,"title":"West Cork","medium":"Oil on canvas","year":2024,"position":1,"url":"https://res.cloudinary.com/1.jpg"},
              {"id":2,"title":null,"medium":null,"year":null,"position":2,"url":"https://res.cloudinary.com/2.jpg"}
            ]
        """.trimIndent()

        val images = ApiJson.decodeFromString<List<WorkImageDto>>(payload).map { it.toWorkImage() }

        assertEquals(2, images.size)
        assertEquals("West Cork", images[0].title)
        assertEquals("", images[1].title)
        assertNull(images[1].year)
    }

    @Test
    fun `unknown keys are ignored`() {
        val payload = """[{"id":1,"title":"T","medium":"M","year":2020,"position":1,"url":"https://c.example/1.jpg","future_field":"survives"}]"""

        val image = ApiJson.decodeFromString<List<WorkImageDto>>(payload).single().toWorkImage()

        assertEquals("T", image.title)
    }
}
