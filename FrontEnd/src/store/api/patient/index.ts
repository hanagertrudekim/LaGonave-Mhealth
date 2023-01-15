import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../../constant';
import { PatientInfo, PatientTableInfo } from '../../../model/patient';

export const patientApi = createApi({
  reducerPath: 'patient',
  tagTypes: ['patient'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_PATH}`,
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({

    getPatients: builder.query<PatientTableInfo, number | null>({
      query: (phone_number) => ({ url: `/api/patients?phone_number=${phone_number}` }),
      providesTags: ['patient'],
      keepUnusedDataFor: 5,
    }),

    addPatient: builder.mutation<PatientInfo, Partial<PatientInfo>>({
      query: (body) => ({
          url: '/api/patients',
          method: 'POST',
          body
        }),
        invalidatesTags: ['patient'],
      }),
  }),
});

export const { useGetPatientsQuery, useAddPatientMutation } = patientApi;
