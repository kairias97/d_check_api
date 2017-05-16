SELECT 
	ap.id id_alergia_paciente,
    ap.nombre_alergia nombre_alergia_paciente,
    ap.id_paciente id_paciente,
    ca.id id_categoria_alergia,
    ca.nombre_categoria_alergia nombre_categoria_alerta
FROM alergia_paciente AS ap
JOIN categoria_alergia AS ca ON ap.id_categoria_alergia = ca.id
WHERE ap.id_paciente = $1;