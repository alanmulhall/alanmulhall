package com.alanmulhall.portfolio

import org.junit.Assert.assertEquals
import org.junit.Test

class BuildConfigTest {
    @Test
    fun `application id and version are configured`() {
        assertEquals("com.alanmulhall.portfolio", BuildConfig.APPLICATION_ID)
        assertEquals("0.1.0", BuildConfig.VERSION_NAME)
    }
}
