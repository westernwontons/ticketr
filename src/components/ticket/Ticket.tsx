type TicketProps = {
  content: string;
};

const Ticket = (props: TicketProps) => {
  return (
    <div className='card'>
      <div className='card-body'>{props.content}</div>
    </div>
  );
};

export default Ticket;
