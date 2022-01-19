export const config = {
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' as string),
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string),
  apiVersion: '2021-10-21',
  useCdn: (process.env.NODE_ENV === 'production' as string),
}