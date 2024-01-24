// * While passing the props, You have to make one type object and pass it as a parameter to the function. The type object is nothing but the interface in typescript. that contains the type of the props that you are passing to the function.
type GreetProps = {
  name: String;
  messageCount : number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
        {props.isLoggedIn ? <h2>Welcome {props.name}! You have {props.messageCount} unread messages.</h2> : <h2>Welcome Guest!</h2>}
      
    </div>
  );
};
