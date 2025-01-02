```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count > 0) {
       interval = setInterval(() => {
         console.log('Count:', count);
       }, 1000);
    }
    return () => {
      clearInterval(interval);
      console.log('Cleanup');
    };
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```