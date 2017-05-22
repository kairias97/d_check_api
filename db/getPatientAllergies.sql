SELECT 
	CAST(ap.id AS INT) id_alergia_paciente,
    ap.nombre_alergia nombre_alergia_paciente,
    CAST(ap.id_paciente AS INT) id_paciente,
    CAST(ca.id AS INT) id_categoria_alergia,
    ca.nombre_categoria_alergia nombre_categoria_alergia
FROM alergia_paciente AS ap
JOIN categoria_alergia AS ca ON ap.id_categoria_alergia = ca.id
WHERE ap.id_paciente = $1;