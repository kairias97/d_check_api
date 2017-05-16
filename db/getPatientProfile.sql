SELECT  
	p.id id_paciente,
    p.nombres,
    p.apellidos,
    p.sexo,
    p.edad,
    p.correo,
    p.correo_alternativo,
    p.celular,
    p.altura,
    p.peso,
    ip.id id_identificacion_paciente,
    ip.codigo_identificacion,
    ci.id id_categoria_identificacion,
  	ci.nombre_categoria_identificacion
FROM paciente as p
JOIN identificacion_paciente ip ON p.id = ip.id_paciente
JOIN categoria_identificacion ci ON ci.id =ip.id_categoria_identificacion
WHERE p.id = $1