// lib/sanity.js
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import {
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity'
import {config} from './config'

/**
 * Function to build the image url
 * 
 * @param {SanityImageObject} source Image source url
 * @return {string} image url
 */
export const urlFor = (source : SanityImageObject) => createImageUrlBuilder(config).image(source)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
})