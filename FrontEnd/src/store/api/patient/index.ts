import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../../constant';
import { PatientInfo, PatientTableInfo } from '../../../model/patient';

export const patientApi = createApi({
  reducerPath: 'patient',
  tagTypes: ['patient'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_PATH}`,
  }), 
  endpoints: (builder) => ({

    getPatients: builder.query<PatientTableInfo[], number | null>({
      query: (phone_number) => ({ url: `/api/patients?phone_number=${phone_number}` }),
      providesTags: ['patient'],
    }),

    addPatient: builder.mutation<PatientTableInfo[],PatientInfo>({
      query: () => {
        return ({
          url: '/api/patient',
          method: 'POST',
        })
      },
    }),
  }),
});

export const { useGetPatientsQuery, useAddPatientMutation } = patientApi;
