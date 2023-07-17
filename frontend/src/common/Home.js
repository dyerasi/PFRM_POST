import { useGetAllEventsQuery } from "../state"
import { Layout } from "./Layout"

export const HomePage = () => {
  const { data, error, isLoading } = useGetAllEventsQuery()
  console.log(typeof(data))
  return (
    <Layout>
      <div>
        Home Page
      </div>
      {data && 
        data[0].map((item) => {
          return <div key={item.event_id}>
            {item.event_id}
            <h2>{item.location_time}</h2>
          </div>
        })
      }
    </Layout>
    
  )
}
