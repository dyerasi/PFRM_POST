//events database

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EVENTS_DB_URL } from '../../Constants'

// Define a service using a base URL and expected endpoints
//need to add tags to managage invaildating stale data
export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: EVENTS_DB_URL }),
  endpoints: (builder) => ({
    getEventById: builder.query({
      query: (id) => `events/${id}`,
    }),
    getAllEvents: builder.query({
      query: () => '/events'
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEventByIdQuery } = eventsApi