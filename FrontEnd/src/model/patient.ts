export interface PatientTableInfo {
  id: {
    value: string;
  },
  full_name: {
    value: string;
  }
}

export interface PatientInfo {
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  height?: number;
  weight?: number;
  phone_number: string;
  recorder_id: string;
}
