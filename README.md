## Listen Once

Will add an event listener that will only fire the first time.

Install is like:

```javascript
npm install --save listen-once
```

Use it like:

```javascript

listenOnce(element, eventName, handler);

```

It can even take a array of event names to listen to and will only fire the handler on the first one. useful if you want to intentionally create a race condition.

```javascript

listenOnce(element, ['mouse', 'key', 'earthquake'], handler);

```