import mitt from 'mitt';
import type { mittKeys, EventBusKeyPayloadMap } from '~/lib/core/composables/mitt';

export default defineNuxtPlugin(() => {
    const emitter = mitt<EventBusKeyPayloadMap>();

    return {
        provide: {
            mitt: {
                on: <T extends mittKeys>(key: T, handler: (event: EventBusKeyPayloadMap[T]) => void) => 
                    emitter.on(key, handler),
                emit: <T extends mittKeys>(key: T, payload: EventBusKeyPayloadMap[T]) =>
                    emitter.emit(key, payload)
            }
        }
    }
})