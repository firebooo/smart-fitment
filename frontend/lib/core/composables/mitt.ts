export enum mittKeys {
    TEST_KEY = 'text_key'
}

export type EventBusKeyPayloadMap = { [k in mittKeys]: any } & Record<string, unknown>
  