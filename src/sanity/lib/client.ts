import { createClient } from 'next-sanity'
// import {token, apiVersion, dataset, projectId } from '../env'
// import builder from '@sanity/image-url/lib/types/builder'

 const client = createClient({
  projectId:"z2997vq8",
  dataset:"production",
  token :"skpuMMHlaESrkolGp636zL5N9pfBzoZVriORVuj0HQwr0UYeM9pg2U2qjDWKVnwlZRQWSQMQuD58MQYlEzN5dMXHgz31ZwyVKg1v1IrBapHwLvFbPVDtqyFzZ5YM9ZIyBzPV0oOw2QGGzTQg7dtltUSSwomqIQk71VvaotAKHm75LNJ2bzzW",
  apiVersion:"2025-01-15",

 

  useCdn: true // Set to false if statically generating pages, using ISR or tag-based revalidation
})



export default client



