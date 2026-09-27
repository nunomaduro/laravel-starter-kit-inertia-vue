<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import ManagePasskeys from '@/components/ManagePasskeys.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { index } from '@/routes/user-passkey';
import type { BreadcrumbItem } from '@/types';
import type { Passkey } from '@/types/auth';

type Props = {
    canManagePasskeys?: boolean;
    passkeys?: Passkey[];
};

withDefaults(defineProps<Props>(), {
    canManagePasskeys: false,
    passkeys: () => [],
});

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Passkeys',
        href: index.url(),
    },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head title="Passkeys" />

        <SettingsLayout>
            <ManagePasskeys
                :can-manage-passkeys="canManagePasskeys"
                :passkeys="passkeys"
            />
        </SettingsLayout>
    </AppLayout>
</template>
