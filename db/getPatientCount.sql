SELECT 
	CAST(id AS INT) id_paciente, 
    nombres, 
    apellidos, 
    correo,
    (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada IS NULL) count_pendiente,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = false) count_rechazado,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = true) count_aceptado,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada = true AND sv.aceptada IS NULL) count_cancelado
    FROM public.paciente as p
    WHERE id = $1
GROUP BY id, nombres, apellidos, correo