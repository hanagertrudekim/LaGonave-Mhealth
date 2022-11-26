import { useNavigate } from 'react-router-dom';
import { PatientInfo } from '../../model/patient';
import { useAddPatientMutation } from '../../store/api/patient';

export default function usePatientMutation() {
  const [addPatient] = useAddPatientMutation();
  const navigate = useNavigate();

  function registerPatient(values: Partial<PatientInfo>) {
    addPatient(values);
    navigate('/patient/diagnosis-form');
  }

  return { registerPatient } as const;
}
