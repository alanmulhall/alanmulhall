package com.alanmulhall.portfolio.data

import kotlinx.serialization.json.Json

/**
 * Shared JSON codec: unknown keys are tolerated so the Android client survives
 * additive changes to the API contract without redeploying.
 */
val ApiJson = Json { ignoreUnknownKeys = true }
