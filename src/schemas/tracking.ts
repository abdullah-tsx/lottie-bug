import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { InferType } from 'yup';

const trackingSchema = Yup.object().shape({
	trackingId: Yup.string().min(4).required(),
});

export type TrackingFormData = InferType<typeof trackingSchema>;

const trackingInitialValues: TrackingFormData = {
	trackingId: '',
};

export const TrackingSchema = {
	schema: trackingSchema,
	resolver: yupResolver(trackingSchema),
	defaultValues: trackingInitialValues,
};
