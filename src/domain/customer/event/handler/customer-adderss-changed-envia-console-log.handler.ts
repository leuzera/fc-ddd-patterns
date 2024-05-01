import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import EventInterface from "../../../@shared/event/event.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class CustomerAddressChangedEnviaConsoleLogHandler implements EventHandlerInterface<CustomerAddressChangedEvent> {
    handle(event: EventInterface): void {
        const message = `Endereço do cliente: ${event.eventData.id}, ${event.eventData.nome} alterado para: ${event.eventData.endereco}`;
        console.log(`Handler2: EnviaConsoleLog1Handler. Mensagem: "${message}".`);
    }
}