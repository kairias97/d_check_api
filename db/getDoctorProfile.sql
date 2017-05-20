SELECT  
	CAST(d.id AS INT) id_doctor,
    d.nombres,
    d.apellidos,
    d.sexo,
    d.edad,
    d.correo,
    d.correo_alternativo,
    d.celular,
    d.altura,
    d.peso,
    id.id id_identificacion_doctor,
    id.codigo_identificacion,
    ci.id id_categoria_identificacion,
  	ci.nombre_categoria_identificacion
FROM doctor as d
JOIN identificacion_doctor id ON d.id = id.id_doctor
JOIN categoria_identificacion ci ON ci.id =id.id_categoria_identificacion
WHERE d.id = $1
LIMIT 1;