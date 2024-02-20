import { rtkApi } from 'shared/api/rtkApi';
import type { Notification } from 'entities.entities/Notification';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        notificationList: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useNotificationListQuery: useNotification } = notificationsApi;
