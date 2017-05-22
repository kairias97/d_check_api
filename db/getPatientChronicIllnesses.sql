SELECT 
	CAST(efp.id AS INT) id_enfermedad_cronica_paciente,
    CAST(efp.id_paciente AS INT),
    CAST(ec.id AS INT) id_categoria_enfermedad_cronica,
    ec.nombre_enfermedad nombre_enfermedad_cronica
FROM enfermedad_cronica_paciente efp
JOIN enfermedad_cronica ec ON efp.id_enfermedad_cronica = ec.id
WHERE id_paciente = $1;