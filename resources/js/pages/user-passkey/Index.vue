<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import ManagePasskeys from '@/components/ManagePasskeys.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { index } from '@/routes/user-passkey';
import type { BreadcrumbItem } from '@/types';
import type { Passkey } from '@/types/auth';

defineOptions({
    layout: [
        [
            AppLayout,
            {
                breadcrumbs: [
                    {
                        title: 'Passkeys',
                        href: index.url(),
                    },
                ] satisfies BreadcrumbItem[],
            },
        ],
        SettingsLayout,
    ],
});

type Props = {
    canManagePasskeys?: boolean;
    passkeys?: Passkey[];
};

withDefaults(defineProps<Props>(), {
    canManagePasskeys: false,
    passkeys: () => [],
});
</script>

<template>
    <Head title="Passkeys" />

    <ManagePasskeys
        :can-manage-passkeys="canManagePasskeys"
        :passkeys="passkeys"
    />
</template>
