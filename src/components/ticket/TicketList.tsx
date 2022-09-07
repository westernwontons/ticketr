import Ticket from './Ticket';

type TicketListProps = {
  list: {
    id: number;
    content: string;
  }[];
};

const TicketList = (props: TicketListProps) => {
  return (
    <div className='bg-red-500'>
      <ul className='bg-green-500'>
        {props.list.map(({ id, content }) => (
          <Ticket key={id} content={content} />
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
