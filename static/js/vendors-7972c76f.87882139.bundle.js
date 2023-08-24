"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-7972c76f"],{

/***/ 48646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zt: function() { return /* reexport */ components_Provider; },
  I0: function() { return /* reexport */ useDispatch; },
  v9: function() { return /* reexport */ useSelector; }
});

// UNUSED EXPORTS: ReactReduxContext, batch, connect, createDispatchHook, createSelectorHook, createStoreHook, shallowEqual, useStore

// EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(4322);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(7231);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(10422);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/utils/reactBatchedUpdates.js

;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/components/Context.js

const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis :
/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
{};

function getContext() {
  var _gT$ContextKey;

  if (!react.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
  let realContext = contextMap.get(react.createContext);

  if (!realContext) {
    realContext = react.createContext(null);

    if (false) {}

    contextMap.set(react.createContext, realContext);
  }

  return realContext;
}

const Context_ReactReduxContext = /*#__PURE__*/getContext();
/* harmony default export */ var Context = ((/* unused pure expression or super */ null && (Context_ReactReduxContext)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = Context_ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0,react.useContext)(context);

    if (false) {}

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext_useReduxContext = /*#__PURE__*/createReduxContextHook();
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/utils/useSyncExternalStore.js
const useSyncExternalStore_notInitialized = () => {
  throw new Error('uSES not initialized!');
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/hooks/useSelector.js




let useSyncExternalStoreWithSelector = useSyncExternalStore_notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = Context_ReactReduxContext) {
  const useReduxContext = context === Context_ReactReduxContext ? useReduxContext_useReduxContext : createReduxContextHook(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    if (false) {}

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext();
    const firstRun = (0,react.useRef)(true);
    const wrappedSelector = (0,react.useCallback)({
      [selector.name](state) {
        const selected = selector(state);

        if (false) {}

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0,react.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();
// EXTERNAL MODULE: ./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(72535);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js
var react_is = __webpack_require__(61357);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function Subscription_createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect_useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/components/connect.js


const _excluded = (/* unused pure expression or super */ null && (["reactReduxForwardedRef"]));

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = (/* unused pure expression or super */ null && (notInitialized));
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = (/* unused pure expression or super */ null && ([null, 0]));
const NO_SUBSCRIPTION_ARRAY = (/* unused pure expression or super */ null && ([null, null])); // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (false) {}

  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {}

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        isContextConsumer( /*#__PURE__*/React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = React.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return defaultSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = React.useRef();
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef();
      const renderIsScheduled = React.useRef(false);
      const isProcessingDispatch = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef();
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = React.useMemo(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = React.useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          React.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/React.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = React.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/React.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }

    return hoistStatics(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ var components_connect = ((/* unused pure expression or super */ null && (connect)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/components/Provider.js





function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = react.useMemo(() => {
    const subscription = Subscription_createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = react.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || Context_ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ var components_Provider = (Provider);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/hooks/useStore.js


/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = Context_ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === Context_ReactReduxContext ? useReduxContext_useReduxContext : // @ts-ignore
  createReduxContextHook(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore_useStore = /*#__PURE__*/createStoreHook();
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = Context_ReactReduxContext) {
  const useStore = // @ts-ignore
  context === Context_ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/exports.js









;// CONCATENATED MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/index.js
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






initializeUseSelector(with_selector.useSyncExternalStoreWithSelector);
initializeConnect(shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

setBatch(react_dom.unstable_batchedUpdates);



/***/ }),

/***/ 95387:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OT: function() { return /* binding */ PanelResizeHandle; },
/* harmony export */   eh: function() { return /* binding */ PanelGroup; },
/* harmony export */   s_: function() { return /* binding */ Panel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);


// This module exists to work around Webpack issue https://github.com/webpack/webpack/issues/14814

// eslint-disable-next-line no-restricted-imports

const {
  createElement,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));

// `toString()` prevents bundlers from trying to `import { useId } from 'react'`
const useId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))["useId".toString()];

const useIsomorphicLayoutEffect = useLayoutEffect ;

const wrappedUseId = typeof useId === "function" ? useId : () => null;
let counter = 0;
function useUniqueId(idFromParams = null) {
  const idFromUseId = wrappedUseId();
  const idRef = useRef(idFromParams || idFromUseId || null);
  if (idRef.current === null) {
    idRef.current = "" + counter++;
  }
  return idRef.current;
}

const PanelGroupContext = createContext(null);
PanelGroupContext.displayName = "PanelGroupContext";

function PanelWithForwardedRef({
  children = null,
  className: classNameFromProps = "",
  collapsedSize = 0,
  collapsible = false,
  defaultSize = null,
  forwardedRef,
  id: idFromProps = null,
  maxSize = 100,
  minSize = 10,
  onCollapse = null,
  onResize = null,
  order = null,
  style: styleFromProps = {},
  tagName: Type = "div"
}) {
  const context = useContext(PanelGroupContext);
  if (context === null) {
    throw Error(`Panel components must be rendered within a PanelGroup container`);
  }
  const panelId = useUniqueId(idFromProps);
  const {
    collapsePanel,
    expandPanel,
    getPanelStyle,
    registerPanel,
    resizePanel,
    unregisterPanel
  } = context;

  // Use a ref to guard against users passing inline props
  const callbacksRef = useRef({
    onCollapse,
    onResize
  });
  useEffect(() => {
    callbacksRef.current.onCollapse = onCollapse;
    callbacksRef.current.onResize = onResize;
  });

  // Basic props validation
  if (minSize < 0 || minSize > 100) {
    throw Error(`Panel minSize must be between 0 and 100, but was ${minSize}`);
  } else if (maxSize < 0 || maxSize > 100) {
    throw Error(`Panel maxSize must be between 0 and 100, but was ${maxSize}`);
  } else {
    if (defaultSize !== null) {
      if (defaultSize < 0 || defaultSize > 100) {
        throw Error(`Panel defaultSize must be between 0 and 100, but was ${defaultSize}`);
      } else if (minSize > defaultSize && !collapsible) {
        console.error(`Panel minSize ${minSize} cannot be greater than defaultSize ${defaultSize}`);
        defaultSize = minSize;
      }
    }
  }
  const style = getPanelStyle(panelId, defaultSize);
  const committedValuesRef = useRef({
    size: parseSizeFromStyle(style)
  });
  const panelDataRef = useRef({
    callbacksRef,
    collapsedSize,
    collapsible,
    defaultSize,
    id: panelId,
    idWasAutoGenerated: idFromProps == null,
    maxSize,
    minSize,
    order
  });
  useIsomorphicLayoutEffect(() => {
    committedValuesRef.current.size = parseSizeFromStyle(style);
    panelDataRef.current.callbacksRef = callbacksRef;
    panelDataRef.current.collapsedSize = collapsedSize;
    panelDataRef.current.collapsible = collapsible;
    panelDataRef.current.defaultSize = defaultSize;
    panelDataRef.current.id = panelId;
    panelDataRef.current.idWasAutoGenerated = idFromProps == null;
    panelDataRef.current.maxSize = maxSize;
    panelDataRef.current.minSize = minSize;
    panelDataRef.current.order = order;
  });
  useIsomorphicLayoutEffect(() => {
    registerPanel(panelId, panelDataRef);
    return () => {
      unregisterPanel(panelId);
    };
  }, [order, panelId, registerPanel, unregisterPanel]);
  useImperativeHandle(forwardedRef, () => ({
    collapse: () => collapsePanel(panelId),
    expand: () => expandPanel(panelId),
    getCollapsed() {
      return committedValuesRef.current.size === 0;
    },
    getSize() {
      return committedValuesRef.current.size;
    },
    resize: percentage => resizePanel(panelId, percentage)
  }), [collapsePanel, expandPanel, panelId, resizePanel]);
  return createElement(Type, {
    children,
    className: classNameFromProps,
    "data-panel": "",
    "data-panel-collapsible": collapsible || undefined,
    "data-panel-id": panelId,
    "data-panel-size": parseFloat("" + style.flexGrow).toFixed(1),
    id: `data-panel-id-${panelId}`,
    style: {
      ...style,
      ...styleFromProps
    }
  });
}
const Panel = forwardRef((props, ref) => createElement(PanelWithForwardedRef, {
  ...props,
  forwardedRef: ref
}));
PanelWithForwardedRef.displayName = "Panel";
Panel.displayName = "forwardRef(Panel)";

// HACK
function parseSizeFromStyle(style) {
  const {
    flexGrow
  } = style;
  if (typeof flexGrow === "string") {
    return parseFloat(flexGrow);
  } else {
    return flexGrow;
  }
}

const PRECISION = 10;

function adjustByDelta(event, panels, idBefore, idAfter, delta, prevSizes, panelSizeBeforeCollapse, initialDragState) {
  const {
    sizes: initialSizes
  } = initialDragState || {};

  // If we're resizing by mouse or touch, use the initial sizes as a base.
  // This has the benefit of causing force-collapsed panels to spring back open if drag is reversed.
  const baseSizes = initialSizes || prevSizes;
  if (delta === 0) {
    return baseSizes;
  }
  const panelsArray = panelsMapToSortedArray(panels);
  const nextSizes = baseSizes.concat();
  let deltaApplied = 0;

  // A resizing panel affects the panels before or after it.
  //
  // A negative delta means the panel immediately after the resizer should grow/expand by decreasing its offset.
  // Other panels may also need to shrink/contract (and shift) to make room, depending on the min weights.
  //
  // A positive delta means the panel immediately before the resizer should "expand".
  // This is accomplished by shrinking/contracting (and shifting) one or more of the panels after the resizer.

  // Max-bounds check the panel being expanded first.
  {
    const pivotId = delta < 0 ? idAfter : idBefore;
    const index = panelsArray.findIndex(panel => panel.current.id === pivotId);
    const panel = panelsArray[index];
    const baseSize = baseSizes[index];
    const nextSize = safeResizePanel(panel, Math.abs(delta), baseSize, event);
    if (baseSize === nextSize) {
      // If there's no room for the pivot panel to grow, we can ignore this drag update.
      return baseSizes;
    } else {
      if (nextSize === 0 && baseSize > 0) {
        panelSizeBeforeCollapse.set(pivotId, baseSize);
      }
      delta = delta < 0 ? baseSize - nextSize : nextSize - baseSize;
    }
  }
  let pivotId = delta < 0 ? idBefore : idAfter;
  let index = panelsArray.findIndex(panel => panel.current.id === pivotId);
  while (true) {
    const panel = panelsArray[index];
    const baseSize = baseSizes[index];
    const deltaRemaining = Math.abs(delta) - Math.abs(deltaApplied);
    const nextSize = safeResizePanel(panel, 0 - deltaRemaining, baseSize, event);
    if (baseSize !== nextSize) {
      if (nextSize === 0 && baseSize > 0) {
        panelSizeBeforeCollapse.set(panel.current.id, baseSize);
      }
      deltaApplied += baseSize - nextSize;
      nextSizes[index] = nextSize;
      if (deltaApplied.toPrecision(PRECISION).localeCompare(Math.abs(delta).toPrecision(PRECISION), undefined, {
        numeric: true
      }) >= 0) {
        break;
      }
    }
    if (delta < 0) {
      if (--index < 0) {
        break;
      }
    } else {
      if (++index >= panelsArray.length) {
        break;
      }
    }
  }

  // If we were unable to resize any of the panels panels, return the previous state.
  // This will essentially bailout and ignore the "mousemove" event.
  if (deltaApplied === 0) {
    return baseSizes;
  }

  // Adjust the pivot panel before, but only by the amount that surrounding panels were able to shrink/contract.
  pivotId = delta < 0 ? idAfter : idBefore;
  index = panelsArray.findIndex(panel => panel.current.id === pivotId);
  nextSizes[index] = baseSizes[index] + deltaApplied;
  return nextSizes;
}
function callPanelCallbacks(panelsArray, sizes, panelIdToLastNotifiedSizeMap) {
  sizes.forEach((size, index) => {
    const panelRef = panelsArray[index];
    if (!panelRef) {
      // Handle initial mount (when panels are registered too late to be in the panels array)
      // The subsequent render+effects will handle the resize notification
      return;
    }
    const {
      callbacksRef,
      collapsedSize,
      collapsible,
      id
    } = panelRef.current;
    const lastNotifiedSize = panelIdToLastNotifiedSizeMap[id];
    if (lastNotifiedSize !== size) {
      panelIdToLastNotifiedSizeMap[id] = size;
      const {
        onCollapse,
        onResize
      } = callbacksRef.current;
      if (onResize) {
        onResize(size, lastNotifiedSize);
      }
      if (collapsible && onCollapse) {
        if ((lastNotifiedSize == null || lastNotifiedSize === collapsedSize) && size !== collapsedSize) {
          onCollapse(false);
        } else if (lastNotifiedSize !== collapsedSize && size === collapsedSize) {
          onCollapse(true);
        }
      }
    }
  });
}
function getBeforeAndAfterIds(id, panelsArray) {
  if (panelsArray.length < 2) {
    return [null, null];
  }
  const index = panelsArray.findIndex(panel => panel.current.id === id);
  if (index < 0) {
    return [null, null];
  }
  const isLastPanel = index === panelsArray.length - 1;
  const idBefore = isLastPanel ? panelsArray[index - 1].current.id : id;
  const idAfter = isLastPanel ? id : panelsArray[index + 1].current.id;
  return [idBefore, idAfter];
}

// This method returns a number between 1 and 100 representing
// the % of the group's overall space this panel should occupy.
function getFlexGrow(panels, id, sizes) {
  if (panels.size === 1) {
    return "100";
  }
  const panelsArray = panelsMapToSortedArray(panels);
  const index = panelsArray.findIndex(panel => panel.current.id === id);
  const size = sizes[index];
  if (size == null) {
    return "0";
  }
  return size.toPrecision(PRECISION);
}
function getPanel(id) {
  const element = document.querySelector(`[data-panel-id="${id}"]`);
  if (element) {
    return element;
  }
  return null;
}
function getPanelGroup(id) {
  const element = document.querySelector(`[data-panel-group-id="${id}"]`);
  if (element) {
    return element;
  }
  return null;
}
function getResizeHandle(id) {
  const element = document.querySelector(`[data-panel-resize-handle-id="${id}"]`);
  if (element) {
    return element;
  }
  return null;
}
function getResizeHandleIndex(id) {
  const handles = getResizeHandles();
  const index = handles.findIndex(handle => handle.getAttribute("data-panel-resize-handle-id") === id);
  return index ?? null;
}
function getResizeHandles() {
  return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id]`));
}
function getResizeHandlesForGroup(groupId) {
  return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${groupId}"]`));
}
function getResizeHandlePanelIds(groupId, handleId, panelsArray) {
  const handle = getResizeHandle(handleId);
  const handles = getResizeHandlesForGroup(groupId);
  const index = handle ? handles.indexOf(handle) : -1;
  const idBefore = panelsArray[index]?.current?.id ?? null;
  const idAfter = panelsArray[index + 1]?.current?.id ?? null;
  return [idBefore, idAfter];
}
function panelsMapToSortedArray(panels) {
  return Array.from(panels.values()).sort((panelA, panelB) => {
    const orderA = panelA.current.order;
    const orderB = panelB.current.order;
    if (orderA == null && orderB == null) {
      return 0;
    } else if (orderA == null) {
      return -1;
    } else if (orderB == null) {
      return 1;
    } else {
      return orderA - orderB;
    }
  });
}
function safeResizePanel(panel, delta, prevSize, event) {
  const nextSizeUnsafe = prevSize + delta;
  const {
    collapsedSize,
    collapsible,
    maxSize,
    minSize
  } = panel.current;
  if (collapsible) {
    if (prevSize > collapsedSize) {
      // Mimic VS COde behavior; collapse a panel if it's smaller than half of its min-size
      if (nextSizeUnsafe <= minSize / 2 + collapsedSize) {
        return collapsedSize;
      }
    } else {
      const isKeyboardEvent = event?.type?.startsWith("key");
      if (!isKeyboardEvent) {
        // Keyboard events should expand a collapsed panel to the min size,
        // but mouse events should wait until the panel has reached its min size
        // to avoid a visual flickering when dragging between collapsed and min size.
        if (nextSizeUnsafe < minSize) {
          return collapsedSize;
        }
      }
    }
  }
  const nextSize = Math.min(maxSize, Math.max(minSize, nextSizeUnsafe));
  return nextSize;
}

function assert(expectedCondition, message = "Assertion failed!") {
  if (!expectedCondition) {
    console.error(message);
    throw Error(message);
  }
}

// https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/

function useWindowSplitterPanelGroupBehavior({
  committedValuesRef,
  groupId,
  panels,
  setSizes,
  sizes,
  panelSizeBeforeCollapse
}) {
  useEffect(() => {
    const {
      direction,
      panels
    } = committedValuesRef.current;
    const groupElement = getPanelGroup(groupId);
    const {
      height,
      width
    } = groupElement.getBoundingClientRect();
    const handles = getResizeHandlesForGroup(groupId);
    const cleanupFunctions = handles.map(handle => {
      const handleId = handle.getAttribute("data-panel-resize-handle-id");
      const panelsArray = panelsMapToSortedArray(panels);
      const [idBefore, idAfter] = getResizeHandlePanelIds(groupId, handleId, panelsArray);
      if (idBefore == null || idAfter == null) {
        return () => {};
      }
      let minSize = 0;
      let maxSize = 100;
      let totalMinSize = 0;
      let totalMaxSize = 0;

      // A panel's effective min/max sizes also need to account for other panel's sizes.
      panelsArray.forEach(panelData => {
        if (panelData.current.id === idBefore) {
          maxSize = panelData.current.maxSize;
          minSize = panelData.current.minSize;
        } else {
          totalMinSize += panelData.current.minSize;
          totalMaxSize += panelData.current.maxSize;
        }
      });
      const ariaValueMax = Math.min(maxSize, 100 - totalMinSize);
      const ariaValueMin = Math.max(minSize, (panelsArray.length - 1) * 100 - totalMaxSize);
      const flexGrow = getFlexGrow(panels, idBefore, sizes);
      handle.setAttribute("aria-valuemax", "" + Math.round(ariaValueMax));
      handle.setAttribute("aria-valuemin", "" + Math.round(ariaValueMin));
      handle.setAttribute("aria-valuenow", "" + Math.round(parseInt(flexGrow)));
      const onKeyDown = event => {
        if (event.defaultPrevented) {
          return;
        }
        switch (event.key) {
          case "Enter":
            {
              event.preventDefault();
              const index = panelsArray.findIndex(panel => panel.current.id === idBefore);
              if (index >= 0) {
                const panelData = panelsArray[index];
                const size = sizes[index];
                if (size != null) {
                  let delta = 0;
                  if (size.toPrecision(PRECISION) <= panelData.current.minSize.toPrecision(PRECISION)) {
                    delta = direction === "horizontal" ? width : height;
                  } else {
                    delta = -(direction === "horizontal" ? width : height);
                  }
                  const nextSizes = adjustByDelta(event, panels, idBefore, idAfter, delta, sizes, panelSizeBeforeCollapse.current, null);
                  if (sizes !== nextSizes) {
                    setSizes(nextSizes);
                  }
                }
              }
              break;
            }
        }
      };
      handle.addEventListener("keydown", onKeyDown);
      const panelBefore = getPanel(idBefore);
      if (panelBefore != null) {
        handle.setAttribute("aria-controls", panelBefore.id);
      }
      return () => {
        handle.removeAttribute("aria-valuemax");
        handle.removeAttribute("aria-valuemin");
        handle.removeAttribute("aria-valuenow");
        handle.removeEventListener("keydown", onKeyDown);
        if (panelBefore != null) {
          handle.removeAttribute("aria-controls");
        }
      };
    });
    return () => {
      cleanupFunctions.forEach(cleanupFunction => cleanupFunction());
    };
  }, [committedValuesRef, groupId, panels, panelSizeBeforeCollapse, setSizes, sizes]);
}
function useWindowSplitterResizeHandlerBehavior({
  disabled,
  handleId,
  resizeHandler
}) {
  useEffect(() => {
    if (disabled || resizeHandler == null) {
      return;
    }
    const handleElement = getResizeHandle(handleId);
    if (handleElement == null) {
      return;
    }
    const onKeyDown = event => {
      if (event.defaultPrevented) {
        return;
      }
      switch (event.key) {
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "End":
        case "Home":
          {
            event.preventDefault();
            resizeHandler(event);
            break;
          }
        case "F6":
          {
            event.preventDefault();
            const handles = getResizeHandles();
            const index = getResizeHandleIndex(handleId);
            assert(index !== null);
            const nextIndex = event.shiftKey ? index > 0 ? index - 1 : handles.length - 1 : index + 1 < handles.length ? index + 1 : 0;
            const nextHandle = handles[nextIndex];
            nextHandle.focus();
            break;
          }
      }
    };
    handleElement.addEventListener("keydown", onKeyDown);
    return () => {
      handleElement.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled, handleId, resizeHandler]);
}

function areEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let index = 0; index < arrayA.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
}

function getDragOffset(event, handleId, direction, initialOffset = 0, initialHandleElementRect = null) {
  const isHorizontal = direction === "horizontal";
  let pointerOffset = 0;
  if (isMouseEvent(event)) {
    pointerOffset = isHorizontal ? event.clientX : event.clientY;
  } else if (isTouchEvent(event)) {
    const firstTouch = event.touches[0];
    pointerOffset = isHorizontal ? firstTouch.screenX : firstTouch.screenY;
  } else {
    return 0;
  }
  const handleElement = getResizeHandle(handleId);
  const rect = initialHandleElementRect || handleElement.getBoundingClientRect();
  const elementOffset = isHorizontal ? rect.left : rect.top;
  return pointerOffset - elementOffset - initialOffset;
}

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX
function getMovement(event, groupId, handleId, panelsArray, direction, prevSizes, initialDragState) {
  const {
    dragOffset = 0,
    dragHandleRect,
    sizes: initialSizes
  } = initialDragState || {};

  // If we're resizing by mouse or touch, use the initial sizes as a base.
  // This has the benefit of causing force-collapsed panels to spring back open if drag is reversed.
  const baseSizes = initialSizes || prevSizes;
  if (isKeyDown(event)) {
    const isHorizontal = direction === "horizontal";
    const groupElement = getPanelGroup(groupId);
    const rect = groupElement.getBoundingClientRect();
    const groupSizeInPixels = isHorizontal ? rect.width : rect.height;
    const denominator = event.shiftKey ? 10 : 100;
    const delta = groupSizeInPixels / denominator;
    let movement = 0;
    switch (event.key) {
      case "ArrowDown":
        movement = isHorizontal ? 0 : delta;
        break;
      case "ArrowLeft":
        movement = isHorizontal ? -delta : 0;
        break;
      case "ArrowRight":
        movement = isHorizontal ? delta : 0;
        break;
      case "ArrowUp":
        movement = isHorizontal ? 0 : -delta;
        break;
      case "End":
        movement = groupSizeInPixels;
        break;
      case "Home":
        movement = -groupSizeInPixels;
        break;
    }

    // If the Panel being resized is collapsible,
    // we need to special case resizing around the minSize boundary.
    // If contracting, Panels should shrink to their minSize and then snap to fully collapsed.
    // If expanding from collapsed, they should snap back to their minSize.
    const [idBefore, idAfter] = getResizeHandlePanelIds(groupId, handleId, panelsArray);
    const targetPanelId = movement < 0 ? idBefore : idAfter;
    const targetPanelIndex = panelsArray.findIndex(panel => panel.current.id === targetPanelId);
    const targetPanel = panelsArray[targetPanelIndex];
    if (targetPanel.current.collapsible) {
      const baseSize = baseSizes[targetPanelIndex];
      if (baseSize === 0 || baseSize.toPrecision(PRECISION) === targetPanel.current.minSize.toPrecision(PRECISION)) {
        movement = movement < 0 ? -targetPanel.current.minSize * groupSizeInPixels : targetPanel.current.minSize * groupSizeInPixels;
      }
    }
    return movement;
  } else {
    return getDragOffset(event, handleId, direction, dragOffset, dragHandleRect);
  }
}
function isKeyDown(event) {
  return event.type === "keydown";
}
function isMouseEvent(event) {
  return event.type.startsWith("mouse");
}
function isTouchEvent(event) {
  return event.type.startsWith("touch");
}

let currentState = null;
let element = null;
function getCursorStyle(state) {
  switch (state) {
    case "horizontal":
      return "ew-resize";
    case "horizontal-max":
      return "w-resize";
    case "horizontal-min":
      return "e-resize";
    case "vertical":
      return "ns-resize";
    case "vertical-max":
      return "n-resize";
    case "vertical-min":
      return "s-resize";
  }
}
function resetGlobalCursorStyle() {
  if (element !== null) {
    document.head.removeChild(element);
    currentState = null;
    element = null;
  }
}
function setGlobalCursorStyle(state) {
  if (currentState === state) {
    return;
  }
  currentState = state;
  const style = getCursorStyle(state);
  if (element === null) {
    element = document.createElement("style");
    document.head.appendChild(element);
  }
  element.innerHTML = `*{cursor: ${style}!important;}`;
}

function debounce(callback, durationMs = 10) {
  let timeoutId = null;
  let callable = (...args) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, durationMs);
  };
  return callable;
}

// Note that Panel ids might be user-provided (stable) or useId generated (non-deterministic)
// so they should not be used as part of the serialization key.
// Using an attribute like minSize instead should work well enough.
// Pre-sorting by minSize allows remembering layouts even if panels are re-ordered/dragged.
function getSerializationKey(panels) {
  return panels.map(panel => {
    const {
      minSize,
      order
    } = panel.current;
    return order ? `${order}:${minSize}` : `${minSize}`;
  }).sort((a, b) => a.localeCompare(b)).join(",");
}
function loadSerializedPanelGroupState(autoSaveId, storage) {
  try {
    const serialized = storage.getItem(`PanelGroup:sizes:${autoSaveId}`);
    if (serialized) {
      const parsed = JSON.parse(serialized);
      if (typeof parsed === "object" && parsed != null) {
        return parsed;
      }
    }
  } catch (error) {}
  return null;
}
function loadPanelLayout(autoSaveId, panels, storage) {
  const state = loadSerializedPanelGroupState(autoSaveId, storage);
  if (state) {
    const key = getSerializationKey(panels);
    return state[key] ?? null;
  }
  return null;
}
function savePanelGroupLayout(autoSaveId, panels, sizes, storage) {
  const key = getSerializationKey(panels);
  const state = loadSerializedPanelGroupState(autoSaveId, storage) || {};
  state[key] = sizes;
  try {
    storage.setItem(`PanelGroup:sizes:${autoSaveId}`, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}

const debounceMap = {};

// PanelGroup might be rendering in a server-side environment where localStorage is not available
// or on a browser with cookies/storage disabled.
// In either case, this function avoids accessing localStorage until needed,
// and avoids throwing user-visible errors.
function initializeDefaultStorage(storageObject) {
  try {
    if (typeof localStorage !== "undefined") {
      // Bypass this check for future calls
      storageObject.getItem = name => {
        return localStorage.getItem(name);
      };
      storageObject.setItem = (name, value) => {
        localStorage.setItem(name, value);
      };
    } else {
      throw new Error("localStorage not supported in this environment");
    }
  } catch (error) {
    console.error(error);
    storageObject.getItem = () => null;
    storageObject.setItem = () => {};
  }
}
const defaultStorage = {
  getItem: name => {
    initializeDefaultStorage(defaultStorage);
    return defaultStorage.getItem(name);
  },
  setItem: (name, value) => {
    initializeDefaultStorage(defaultStorage);
    defaultStorage.setItem(name, value);
  }
};

// Initial drag state serves a few purposes:
// * dragOffset:
//   Resize is calculated by the distance between the current pointer event and the resize handle being "dragged"
//   This value accounts for the initial offset when the touch/click starts, so the handle doesn't appear to "jump"
// * dragHandleRect, sizes:
//   When resizing is done via mouse/touch event– some initial state is stored
//   so that any panels that contract will also expand if drag direction is reversed.
// TODO
// Within an active drag, remember original positions to refine more easily on expand.
// Look at what the Chrome devtools Sources does.
function PanelGroupWithForwardedRef({
  autoSaveId,
  children = null,
  className: classNameFromProps = "",
  direction,
  disablePointerEventsDuringResize = false,
  forwardedRef,
  id: idFromProps = null,
  onLayout,
  storage = defaultStorage,
  style: styleFromProps = {},
  tagName: Type = "div"
}) {
  const groupId = useUniqueId(idFromProps);
  const [activeHandleId, setActiveHandleId] = useState(null);
  const [panels, setPanels] = useState(new Map());

  // When resizing is done via mouse/touch event–
  // We store the initial Panel sizes in this ref, and apply move deltas to them instead of to the current sizes.
  // This has the benefit of causing force-collapsed panels to spring back open if drag is reversed.
  const initialDragStateRef = useRef(null);
  useRef({
    didLogDefaultSizeWarning: false,
    didLogIdAndOrderWarning: false,
    prevPanelIds: []
  });

  // Use a ref to guard against users passing inline props
  const callbacksRef = useRef({
    onLayout
  });
  useEffect(() => {
    callbacksRef.current.onLayout = onLayout;
  });
  const panelIdToLastNotifiedSizeMapRef = useRef({});

  // 0-1 values representing the relative size of each panel.
  const [sizes, setSizes] = useState([]);

  // Used to support imperative collapse/expand API.
  const panelSizeBeforeCollapse = useRef(new Map());
  const prevDeltaRef = useRef(0);

  // Store committed values to avoid unnecessarily re-running memoization/effects functions.
  const committedValuesRef = useRef({
    direction,
    panels,
    sizes
  });
  useImperativeHandle(forwardedRef, () => ({
    getLayout: () => {
      const {
        sizes
      } = committedValuesRef.current;
      return sizes;
    },
    setLayout: sizes => {
      const total = sizes.reduce((accumulated, current) => accumulated + current, 0);
      assert(total === 100, "Panel sizes must add up to 100%");
      const {
        panels
      } = committedValuesRef.current;
      const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;
      const panelsArray = panelsMapToSortedArray(panels);
      setSizes(sizes);
      callPanelCallbacks(panelsArray, sizes, panelIdToLastNotifiedSizeMap);
    }
  }), []);
  useIsomorphicLayoutEffect(() => {
    committedValuesRef.current.direction = direction;
    committedValuesRef.current.panels = panels;
    committedValuesRef.current.sizes = sizes;
  });
  useWindowSplitterPanelGroupBehavior({
    committedValuesRef,
    groupId,
    panels,
    setSizes,
    sizes,
    panelSizeBeforeCollapse
  });

  // Notify external code when sizes have changed.
  useEffect(() => {
    const {
      onLayout
    } = callbacksRef.current;
    const {
      panels,
      sizes
    } = committedValuesRef.current;

    // Don't commit layout until all panels have registered and re-rendered with their actual sizes.
    if (sizes.length > 0) {
      if (onLayout) {
        onLayout(sizes);
      }
      const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;

      // When possible, we notify before the next render so that rendering work can be batched together.
      // Some cases are difficult to detect though,
      // for example– panels that are conditionally rendered can affect the size of neighboring panels.
      // In this case, the best we can do is notify on commit.
      // The callPanelCallbacks() uses its own memoization to avoid notifying panels twice in these cases.
      const panelsArray = panelsMapToSortedArray(panels);
      callPanelCallbacks(panelsArray, sizes, panelIdToLastNotifiedSizeMap);
    }
  }, [sizes]);

  // Once all panels have registered themselves,
  // Compute the initial sizes based on default weights.
  // This assumes that panels register during initial mount (no conditional rendering)!
  useIsomorphicLayoutEffect(() => {
    const sizes = committedValuesRef.current.sizes;
    if (sizes.length === panels.size) {
      // Only compute (or restore) default sizes once per panel configuration.
      return;
    }

    // If this panel has been configured to persist sizing information,
    // default size should be restored from local storage if possible.
    let defaultSizes = null;
    if (autoSaveId) {
      const panelsArray = panelsMapToSortedArray(panels);
      defaultSizes = loadPanelLayout(autoSaveId, panelsArray, storage);
    }
    if (defaultSizes != null) {
      setSizes(defaultSizes);
    } else {
      const panelsArray = panelsMapToSortedArray(panels);
      let panelsWithNullDefaultSize = 0;
      let totalDefaultSize = 0;
      let totalMinSize = 0;

      // TODO
      // Implicit default size calculations below do not account for inferred min/max size values.
      // e.g. if Panel A has a maxSize of 40 then Panels A and B can't both have an implicit default size of 50.
      // For now, these logic edge cases are left to the user to handle via props.

      panelsArray.forEach(panel => {
        totalMinSize += panel.current.minSize;
        if (panel.current.defaultSize === null) {
          panelsWithNullDefaultSize++;
        } else {
          totalDefaultSize += panel.current.defaultSize;
        }
      });
      if (totalDefaultSize > 100) {
        throw new Error(`Default panel sizes cannot exceed 100%`);
      } else if (panelsArray.length > 1 && panelsWithNullDefaultSize === 0 && totalDefaultSize !== 100) {
        throw new Error(`Invalid default sizes specified for panels`);
      } else if (totalMinSize > 100) {
        throw new Error(`Minimum panel sizes cannot exceed 100%`);
      }
      setSizes(panelsArray.map(panel => {
        if (panel.current.defaultSize === null) {
          return (100 - totalDefaultSize) / panelsWithNullDefaultSize;
        }
        return panel.current.defaultSize;
      }));
    }
  }, [autoSaveId, panels, storage]);
  useEffect(() => {
    // If this panel has been configured to persist sizing information, save sizes to local storage.
    if (autoSaveId) {
      if (sizes.length === 0 || sizes.length !== panels.size) {
        return;
      }
      const panelsArray = panelsMapToSortedArray(panels);

      // Limit the frequency of localStorage updates.
      if (!debounceMap[autoSaveId]) {
        debounceMap[autoSaveId] = debounce(savePanelGroupLayout, 100);
      }
      debounceMap[autoSaveId](autoSaveId, panelsArray, sizes, storage);
    }
  }, [autoSaveId, panels, sizes, storage]);
  const getPanelStyle = useCallback((id, defaultSize) => {
    const {
      panels
    } = committedValuesRef.current;

    // Before mounting, Panels will not yet have registered themselves.
    // This includes server rendering.
    // At this point the best we can do is render everything with the same size.
    if (panels.size === 0) {
      return {
        flexBasis: 0,
        flexGrow: defaultSize != null ? defaultSize : undefined,
        flexShrink: 1,
        // Without this, Panel sizes may be unintentionally overridden by their content.
        overflow: "hidden"
      };
    }
    const flexGrow = getFlexGrow(panels, id, sizes);
    return {
      flexBasis: 0,
      flexGrow,
      flexShrink: 1,
      // Without this, Panel sizes may be unintentionally overridden by their content.
      overflow: "hidden",
      // Disable pointer events inside of a panel during resize.
      // This avoid edge cases like nested iframes.
      pointerEvents: disablePointerEventsDuringResize && activeHandleId !== null ? "none" : undefined
    };
  }, [activeHandleId, disablePointerEventsDuringResize, sizes]);
  const registerPanel = useCallback((id, panelRef) => {
    setPanels(prevPanels => {
      if (prevPanels.has(id)) {
        return prevPanels;
      }
      const nextPanels = new Map(prevPanels);
      nextPanels.set(id, panelRef);
      return nextPanels;
    });
  }, []);
  const registerResizeHandle = useCallback(handleId => {
    const resizeHandler = event => {
      event.preventDefault();
      const {
        direction,
        panels,
        sizes: prevSizes
      } = committedValuesRef.current;
      const panelsArray = panelsMapToSortedArray(panels);
      const [idBefore, idAfter] = getResizeHandlePanelIds(groupId, handleId, panelsArray);
      if (idBefore == null || idAfter == null) {
        return;
      }
      let movement = getMovement(event, groupId, handleId, panelsArray, direction, prevSizes, initialDragStateRef.current);
      if (movement === 0) {
        return;
      }
      const groupElement = getPanelGroup(groupId);
      const rect = groupElement.getBoundingClientRect();
      const isHorizontal = direction === "horizontal";

      // Support RTL layouts
      if (document.dir === "rtl" && isHorizontal) {
        movement = -movement;
      }
      const size = isHorizontal ? rect.width : rect.height;
      const delta = movement / size * 100;
      const nextSizes = adjustByDelta(event, panels, idBefore, idAfter, delta, prevSizes, panelSizeBeforeCollapse.current, initialDragStateRef.current);
      const sizesChanged = !areEqual(prevSizes, nextSizes);

      // Don't update cursor for resizes triggered by keyboard interactions.
      if (isMouseEvent(event) || isTouchEvent(event)) {
        // Watch for multiple subsequent deltas; this might occur for tiny cursor movements.
        // In this case, Panel sizes might not change–
        // but updating cursor in this scenario would cause a flicker.
        if (prevDeltaRef.current != delta) {
          if (!sizesChanged) {
            // If the pointer has moved too far to resize the panel any further,
            // update the cursor style for a visual clue.
            // This mimics VS Code behavior.

            if (isHorizontal) {
              setGlobalCursorStyle(movement < 0 ? "horizontal-min" : "horizontal-max");
            } else {
              setGlobalCursorStyle(movement < 0 ? "vertical-min" : "vertical-max");
            }
          } else {
            // Reset the cursor style to the the normal resize cursor.
            setGlobalCursorStyle(isHorizontal ? "horizontal" : "vertical");
          }
        }
      }
      if (sizesChanged) {
        const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;
        setSizes(nextSizes);

        // If resize change handlers have been declared, this is the time to call them.
        // Trigger user callbacks after updating state, so that user code can override the sizes.
        callPanelCallbacks(panelsArray, nextSizes, panelIdToLastNotifiedSizeMap);
      }
      prevDeltaRef.current = delta;
    };
    return resizeHandler;
  }, [groupId]);
  const unregisterPanel = useCallback(id => {
    setPanels(prevPanels => {
      if (!prevPanels.has(id)) {
        return prevPanels;
      }
      const nextPanels = new Map(prevPanels);
      nextPanels.delete(id);
      return nextPanels;
    });
  }, []);
  const collapsePanel = useCallback(id => {
    const {
      panels,
      sizes: prevSizes
    } = committedValuesRef.current;
    const panel = panels.get(id);
    if (panel == null) {
      return;
    }
    const {
      collapsedSize,
      collapsible
    } = panel.current;
    if (!collapsible) {
      return;
    }
    const panelsArray = panelsMapToSortedArray(panels);
    const index = panelsArray.indexOf(panel);
    if (index < 0) {
      return;
    }
    const currentSize = prevSizes[index];
    if (currentSize === collapsedSize) {
      // Panel is already collapsed.
      return;
    }
    panelSizeBeforeCollapse.current.set(id, currentSize);
    const [idBefore, idAfter] = getBeforeAndAfterIds(id, panelsArray);
    if (idBefore == null || idAfter == null) {
      return;
    }
    const isLastPanel = index === panelsArray.length - 1;
    const delta = isLastPanel ? currentSize : collapsedSize - currentSize;
    const nextSizes = adjustByDelta(null, panels, idBefore, idAfter, delta, prevSizes, panelSizeBeforeCollapse.current, null);
    if (prevSizes !== nextSizes) {
      const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;
      setSizes(nextSizes);

      // If resize change handlers have been declared, this is the time to call them.
      // Trigger user callbacks after updating state, so that user code can override the sizes.
      callPanelCallbacks(panelsArray, nextSizes, panelIdToLastNotifiedSizeMap);
    }
  }, []);
  const expandPanel = useCallback(id => {
    const {
      panels,
      sizes: prevSizes
    } = committedValuesRef.current;
    const panel = panels.get(id);
    if (panel == null) {
      return;
    }
    const {
      collapsedSize,
      minSize
    } = panel.current;
    const sizeBeforeCollapse = panelSizeBeforeCollapse.current.get(id) || minSize;
    if (!sizeBeforeCollapse) {
      return;
    }
    const panelsArray = panelsMapToSortedArray(panels);
    const index = panelsArray.indexOf(panel);
    if (index < 0) {
      return;
    }
    const currentSize = prevSizes[index];
    if (currentSize !== collapsedSize) {
      // Panel is already expanded.
      return;
    }
    const [idBefore, idAfter] = getBeforeAndAfterIds(id, panelsArray);
    if (idBefore == null || idAfter == null) {
      return;
    }
    const isLastPanel = index === panelsArray.length - 1;
    const delta = isLastPanel ? collapsedSize - sizeBeforeCollapse : sizeBeforeCollapse;
    const nextSizes = adjustByDelta(null, panels, idBefore, idAfter, delta, prevSizes, panelSizeBeforeCollapse.current, null);
    if (prevSizes !== nextSizes) {
      const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;
      setSizes(nextSizes);

      // If resize change handlers have been declared, this is the time to call them.
      // Trigger user callbacks after updating state, so that user code can override the sizes.
      callPanelCallbacks(panelsArray, nextSizes, panelIdToLastNotifiedSizeMap);
    }
  }, []);
  const resizePanel = useCallback((id, nextSize) => {
    const {
      panels,
      sizes: prevSizes
    } = committedValuesRef.current;
    const panel = panels.get(id);
    if (panel == null) {
      return;
    }
    const {
      collapsedSize,
      collapsible,
      maxSize,
      minSize
    } = panel.current;
    const panelsArray = panelsMapToSortedArray(panels);
    const index = panelsArray.indexOf(panel);
    if (index < 0) {
      return;
    }
    const currentSize = prevSizes[index];
    if (currentSize === nextSize) {
      return;
    }
    if (collapsible && nextSize === collapsedSize) ; else {
      nextSize = Math.min(maxSize, Math.max(minSize, nextSize));
    }
    const [idBefore, idAfter] = getBeforeAndAfterIds(id, panelsArray);
    if (idBefore == null || idAfter == null) {
      return;
    }
    const isLastPanel = index === panelsArray.length - 1;
    const delta = isLastPanel ? currentSize - nextSize : nextSize - currentSize;
    const nextSizes = adjustByDelta(null, panels, idBefore, idAfter, delta, prevSizes, panelSizeBeforeCollapse.current, null);
    if (prevSizes !== nextSizes) {
      const panelIdToLastNotifiedSizeMap = panelIdToLastNotifiedSizeMapRef.current;
      setSizes(nextSizes);

      // If resize change handlers have been declared, this is the time to call them.
      // Trigger user callbacks after updating state, so that user code can override the sizes.
      callPanelCallbacks(panelsArray, nextSizes, panelIdToLastNotifiedSizeMap);
    }
  }, []);
  const context = useMemo(() => ({
    activeHandleId,
    collapsePanel,
    direction,
    expandPanel,
    getPanelStyle,
    groupId,
    registerPanel,
    registerResizeHandle,
    resizePanel,
    startDragging: (id, event) => {
      setActiveHandleId(id);
      if (isMouseEvent(event) || isTouchEvent(event)) {
        const handleElement = getResizeHandle(id);
        initialDragStateRef.current = {
          dragHandleRect: handleElement.getBoundingClientRect(),
          dragOffset: getDragOffset(event, id, direction),
          sizes: committedValuesRef.current.sizes
        };
      }
    },
    stopDragging: () => {
      resetGlobalCursorStyle();
      setActiveHandleId(null);
      initialDragStateRef.current = null;
    },
    unregisterPanel
  }), [activeHandleId, collapsePanel, direction, expandPanel, getPanelStyle, groupId, registerPanel, registerResizeHandle, resizePanel, unregisterPanel]);
  const style = {
    display: "flex",
    flexDirection: direction === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return createElement(PanelGroupContext.Provider, {
    children: createElement(Type, {
      children,
      className: classNameFromProps,
      "data-panel-group": "",
      "data-panel-group-direction": direction,
      "data-panel-group-id": groupId,
      style: {
        ...style,
        ...styleFromProps
      }
    }),
    value: context
  });
}
const PanelGroup = forwardRef((props, ref) => createElement(PanelGroupWithForwardedRef, {
  ...props,
  forwardedRef: ref
}));
PanelGroupWithForwardedRef.displayName = "PanelGroup";
PanelGroup.displayName = "forwardRef(PanelGroup)";

function PanelResizeHandle({
  children = null,
  className: classNameFromProps = "",
  disabled = false,
  id: idFromProps = null,
  onDragging,
  style: styleFromProps = {},
  tagName: Type = "div"
}) {
  const divElementRef = useRef(null);

  // Use a ref to guard against users passing inline props
  const callbacksRef = useRef({
    onDragging
  });
  useEffect(() => {
    callbacksRef.current.onDragging = onDragging;
  });
  const panelGroupContext = useContext(PanelGroupContext);
  if (panelGroupContext === null) {
    throw Error(`PanelResizeHandle components must be rendered within a PanelGroup container`);
  }
  const {
    activeHandleId,
    direction,
    groupId,
    registerResizeHandle,
    startDragging,
    stopDragging
  } = panelGroupContext;
  const resizeHandleId = useUniqueId(idFromProps);
  const isDragging = activeHandleId === resizeHandleId;
  const [isFocused, setIsFocused] = useState(false);
  const [resizeHandler, setResizeHandler] = useState(null);
  const stopDraggingAndBlur = useCallback(() => {
    // Clicking on the drag handle shouldn't leave it focused;
    // That would cause the PanelGroup to think it was still active.
    const div = divElementRef.current;
    div.blur();
    stopDragging();
    const {
      onDragging
    } = callbacksRef.current;
    if (onDragging) {
      onDragging(false);
    }
  }, [stopDragging]);
  useEffect(() => {
    if (disabled) {
      setResizeHandler(null);
    } else {
      const resizeHandler = registerResizeHandle(resizeHandleId);
      setResizeHandler(() => resizeHandler);
    }
  }, [disabled, resizeHandleId, registerResizeHandle]);
  useEffect(() => {
    if (disabled || resizeHandler == null || !isDragging) {
      return;
    }
    const onMove = event => {
      resizeHandler(event);
    };
    const onMouseLeave = event => {
      resizeHandler(event);
    };
    const divElement = divElementRef.current;
    const targetDocument = divElement.ownerDocument;
    targetDocument.body.addEventListener("contextmenu", stopDraggingAndBlur);
    targetDocument.body.addEventListener("mousemove", onMove);
    targetDocument.body.addEventListener("touchmove", onMove);
    targetDocument.body.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseup", stopDraggingAndBlur);
    window.addEventListener("touchend", stopDraggingAndBlur);
    return () => {
      targetDocument.body.removeEventListener("contextmenu", stopDraggingAndBlur);
      targetDocument.body.removeEventListener("mousemove", onMove);
      targetDocument.body.removeEventListener("touchmove", onMove);
      targetDocument.body.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseup", stopDraggingAndBlur);
      window.removeEventListener("touchend", stopDraggingAndBlur);
    };
  }, [direction, disabled, isDragging, resizeHandler, stopDraggingAndBlur]);
  useWindowSplitterResizeHandlerBehavior({
    disabled,
    handleId: resizeHandleId,
    resizeHandler
  });
  const style = {
    cursor: getCursorStyle(direction),
    touchAction: "none",
    userSelect: "none"
  };
  return createElement(Type, {
    children,
    className: classNameFromProps,
    "data-resize-handle-active": isDragging ? "pointer" : isFocused ? "keyboard" : undefined,
    "data-panel-group-direction": direction,
    "data-panel-group-id": groupId,
    "data-panel-resize-handle-enabled": !disabled,
    "data-panel-resize-handle-id": resizeHandleId,
    onBlur: () => setIsFocused(false),
    onFocus: () => setIsFocused(true),
    onMouseDown: event => {
      startDragging(resizeHandleId, event.nativeEvent);
      const {
        onDragging
      } = callbacksRef.current;
      if (onDragging) {
        onDragging(true);
      }
    },
    onMouseUp: stopDraggingAndBlur,
    onTouchCancel: stopDraggingAndBlur,
    onTouchEnd: stopDraggingAndBlur,
    onTouchStart: event => {
      startDragging(resizeHandleId, event.nativeEvent);
      const {
        onDragging
      } = callbacksRef.current;
      if (onDragging) {
        onDragging(true);
      }
    },
    ref: divElementRef,
    role: "separator",
    style: {
      ...style,
      ...styleFromProps
    },
    tabIndex: 0
  });
}
PanelResizeHandle.displayName = "PanelResizeHandle";




/***/ })

}]);