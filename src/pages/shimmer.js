import React from 'react'
import { Breathing, Shimmer, Image } from 'react-shimmer'
import Spinner from '../../components/Spinner'

const ReactShimmer = () => {
    return (
        <div>
            <h1>React Shimmer</h1>
            <hr />
            <div className='shimmer-gallery'>
                <div>
                    <h4>With Shimmer</h4>
                    <Image
                        src='https://source.unsplash.com/300x300/?nature'
                        fallback={<Shimmer width={300} height={300} />}
                        alt=''
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <h4>With Breathing</h4>
                    <Image
                        alt=''
                        src='https://source.unsplash.com/random/300x300'
                        fallback={<Breathing width={300} height={300} />}
                    />
                </div>
                <div>
                    <h4>With Spinner</h4>
                    <Image
                        alt=''
                        src='https://source.unsplash.com/300x300/?vally'
                        fallback={<Spinner />}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReactShimmer
