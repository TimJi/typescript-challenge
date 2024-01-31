import { describe, expect, it } from 'vitest'
import { getTrafficLightStatus, TrafficLight } from './trafficLightEnum'

describe('交通信號燈模擬', () => {
  it('應該根據輸入的信號燈狀態返回對應的描述', () => {
    expect(getTrafficLightStatus(TrafficLight.Red)).toBe(
      'The traffic light is Red',
    )
  })
})
