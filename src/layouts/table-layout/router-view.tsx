import { NSpin } from 'naive-ui'
import type { VNode } from 'vue'
import { Suspense, defineComponent } from 'vue'
import type { RouteLocation } from 'vue-router'
import { RouterView } from 'vue-router'

const $RouterView = defineComponent({
  setup() {
    return () => (
      <RouterView>
        {{
          default({ Component }: { Component: VNode; route: RouteLocation }) {
            return (
              <Suspense>
                {{
                  default: () => Component,

                  fallback() {
                    return (
                      <div style={{ textAlign: 'center' }}>
                        <NSpin strokeWidth={14} show rotate />
                      </div>
                    )
                  }
                }}
              </Suspense>
            )
          }
        }}
      </RouterView>
    )
  }
})
export default $RouterView
