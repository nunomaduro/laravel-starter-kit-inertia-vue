<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppearanceTabs from '@/components/AppearanceTabs.vue';
import Heading from '@/components/Heading.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { edit } from '@/routes/appearance';
import type { BreadcrumbItem } from '@/types';

defineOptions({
    layout: [
        [
            AppLayout,
            {
                breadcrumbs: [
                    {
                        title: 'Appearance settings',
                        href: edit(),
                    },
                ] satisfies BreadcrumbItem[],
            },
        ],
        SettingsLayout,
    ],
});
</script>

<template>
    <Head title="Appearance settings" />

    <h1 class="sr-only">Appearance settings</h1>

    <div class="space-y-6">
        <Heading
            variant="small"
            title="Appearance settings"
            description="Update your account's appearance settings"
        />
        <AppearanceTabs />
    </div>
</template>
