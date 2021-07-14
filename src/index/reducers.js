import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_HIGH_SPEED,
} from './actions'

export default {
  from(state = '北京', actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_FROM:
        return payload
      default:
    }
    return state
  },

  to(state = '上海', actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_TO:
        return payload
      default:
    }

    return state
  },

  isCitySelectorVisible(state = false, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload
      default:
    }

    return state
  },

  currentSelectingLeftCity(state = false, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
        return payload
      default:
    }

    return state
  },

  cityData(state = null, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
    }

    return state
  },

  isLoadingCityData(state = false, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return payload
      default:
    }

    return state
  },

  isDateSelectorVisible(state = false, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
        return payload
      default:
    }

    return state
  },

  highSpeed(state = false, actions) {
    const { type, payload } = actions
    switch (type) {
      case ACTION_SET_HIGH_SPEED:
        return payload
      default:
    }

    return state
  },
}
