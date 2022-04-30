import * as tf from '@tensorflow/tfjs';

export class L2 {
    static className='L2';
    constructor(config) {
        return tf.regularizers.l1l2(config)
    }
}