SELECT 
	CAST(id AS INT) id_doctor, 
    nombres, 
    apellidos, 
    correo,
    (SELECT COUNT(doc.*) FROM documento as doc WHERE aprobado IS NULL AND doc.id_doctor = d.id) count_doc_pendientes, 
    (SELECT COUNT(doc.*) FROM documento as doc WHERE aprobado = true AND doc.id_doctor = d.id) count_doc_aprobados,
    (SELECT COUNT(doc.*) FROM documento as doc WHERE aprobado = false AND doc.id_doctor = d.id) count_doc_rechazados,
    (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_doctor = d.id AND sv.cancelada IS NULL AND sv.aceptada IS NULL) count_consulta_pendiente,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_doctor = d.id AND sv.cancelada IS NULL AND sv.aceptada = false) count_consulta_rechazada,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_doctor = d.id AND sv.cancelada IS NULL AND sv.aceptada = true) count_consulta_aceptada,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_doctor = d.id AND sv.cancelada = true AND sv.aceptada IS NULL) count_consulta_cancelada,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = d.id AND sv.cancelada IS NULL AND sv.aceptada IS NULL) count_normal_pendiente,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = d.id AND sv.cancelada IS NULL AND sv.aceptada = false) count_normal_rechazado,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = d.id AND sv.cancelada IS NULL AND sv.aceptada = true) count_normal_aceptado,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = d.id AND sv.cancelada = true AND sv.aceptada IS NULL) count_normal_cancelado
    FROM public.doctor as d
    WHERE id = $1
GROUP BY id, nombres, apellidos, correo