import org.gradle.api.tasks.testing.Test
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.kotlin.serialization)
}

android {
    namespace = "com.alanmulhall.portfolio"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.alanmulhall.portfolio"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "0.1.0"

        // Override with -Pportfolio.apiBaseUrl=http://10.0.2.2:3000 to test
        // against a locally running Rails app.
        val apiBaseUrl = providers.gradleProperty("portfolio.apiBaseUrl")
            .orElse("https://alanmulhall-production.up.railway.app")
        buildConfigField("String", "API_BASE_URL", "\"${apiBaseUrl.get().trimEnd('/')}\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    // Unit tests are variant-agnostic and the Compose UI tests (Robolectric)
    // need the ui-test-manifest activity, which is only merged into the debug
    // manifest. Disable the redundant release unit tests so `./gradlew test`
    // stays green (AGP 8 creates test<Variant>UnitTest for every build type).
    tasks.matching { it.name == "testReleaseUnitTest" }.configureEach {
        enabled = false
    }

    tasks.withType<Test>().configureEach {
        testLogging {
            events("passed", "skipped", "failed")
        }
    }

    testOptions {
        // android.util.Log and other android stubs return defaults on the JVM,
        // so code paths that log-and-degrade (like the error state) stay testable.
        unitTests.isReturnDefaultValues = true
        // Robolectric runs the Compose UI tests against the merged manifest.
        unitTests.isIncludeAndroidResources = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlin {
        compilerOptions {
            jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17)
        }
    }

    buildFeatures {
        compose = true
        buildConfig = true
    }

    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.material.icons.core)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    implementation(libs.androidx.lifecycle.runtime.compose)
    implementation(libs.okhttp)
    implementation(libs.kotlinx.serialization.json)
    implementation(libs.coil.compose)
    implementation(libs.coil.network.okhttp)

    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)

    testImplementation(libs.junit)
    testImplementation(libs.kotlinx.coroutines.test)
    testImplementation(libs.mockwebserver3)
    testImplementation(platform(libs.androidx.compose.bom))
    testImplementation(libs.androidx.ui.test.junit4)
    testImplementation(libs.robolectric)
    testImplementation(libs.coil.test)
}
