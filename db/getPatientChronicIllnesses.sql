SELECT 
	efp.id id_enfermedad_cronica_paciente,
    efp.id_paciente,
    ec.id id_categoria_enfermedad_cronica,
    ec.nombre_enfermedad nombre_enfermedad_cronica
FROM enfermedad_cronica_paciente efp
JOIN enfermedad_cronica ec ON efp.id_enfermedad_cronica = ec.id
WHERE id_paciente = $1;